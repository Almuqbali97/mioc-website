import { usersCollection } from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { validateEmail } from '../helpers/validateEmail.js';
import { sendVerificationEmail } from '../utils/emeilVerificationEmail.js'
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
dotenv.config();


// registration functionality
export const register = async (req, res) => {
    // NOTE that in the userModel.js there are more fields can be added here, address,phone number ... etc.
    const { firstName, lastName, email, password } = req.body;
    const verificationCode = crypto.randomBytes(32).toString('hex');
    const id = uuidv4();

    const existingEmail = await usersCollection.findOne({ email: email.toLowerCase() });
    // we check if user already registred with google accounts
    if (existingEmail && existingEmail.googleId) {
        return res.status(401).json({ message: "This account already registred with google singin, login using google button" })
    }
    // make sure all reuqired inputs are in
    if (!email || !password) return res.status(401).json({ message: 'Enter Email and Password' });
    // verifying the validity of the email domian
    if (!validateEmail(email)) return res.status(401).json({ message: 'Invalid email address' });
    // password length check
    if (password.length < 7) return res.status(401).json({ message: 'Password length sould be 7 charcters or more ' })

    try {
        // Hash the password asynchronously
        const hashedPassword = await bcryptjs.hash(password, 10);
        // new user object
        const newUser = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email.toLowerCase(),
            isVerified: false, // new field
            verificationToken: verificationCode, // new field
            password: hashedPassword,
            admin_role: false,
            created_at: new Date()
        }

        await usersCollection.insertOne(newUser);
        await sendVerificationEmail(email, verificationCode)
        return res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        console.error('Error:', error);
        if (error.code === 11000) { // MongoDB duplicate key error
            return res.status(400).json({ message: 'Email already used' });
        }
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check for valid user
        const validUser = await usersCollection.findOne({ email: email.toLowerCase() });

        if (!validUser) {
            return res.status(401).json({ message: 'Sorry, we cannot find an account with this email address' });
        }

        // Check if user registered with Google and not with local auth
        if (validUser.email && validUser.googleId && !validUser.password) {
            return res.status(401).json({ message: "This user registered with Google accounts, use Google login" });
        }

        // Check if email is verified
        if (!validUser.isVerified) {
            return res.status(401).json({ message: 'Your email is not verified. Please check your email for the verification link.' });
        }

        // Checking the password
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Wrong email or password' });
        }

        // In case of correct inputs
        if (validUser && validPassword) {
            // Create a special token that can be used to authenticate the user and access without needing to login again in other routes
            const { password, _id, ...userData } = validUser; // Remove the password from the user object so we don't send to client
            const accessToken = jwt.sign({ ...userData }, process.env.JWT_SECRET, { expiresIn: '30d' });

            // Add expiry time for the cookie (e.g., 1 hour then sign in again)
            res.cookie('access_token', accessToken, { httpOnly: true, withCredentials: true, sameSite: 'None', secure: true })
                .status(200).json({ user: userData });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Something went wrong, or no user is registered with this email' });
    }
};

export const googleOAuth = async (req, res) => {
    // sub is google id
    const { sub, given_name, family_name, email } = req.body;
    // in case family name does not exist, we make it an empty string so it doesnt conflict with db schema 
    const familyName = '';
    try {
        // first we check if the user already exists 
        const validUser = await usersCollection.findOne({ email: email.toLowerCase() });

        if (!validUser) {
            // if there is no user with this email we create a new one 
            // Hash the password asynchronously
            // const hashedPassword = await bcryptjs.hash(password, 10);
            // new user object
            const newUser = {
                googleId: sub,
                firstName: given_name,
                lastName: family_name || familyName,
                email: email.toLowerCase(),
                admin_role: false,
                created_at: new Date()
            }

            await usersCollection.insertOne(newUser);
            // return res.status(201).json({ message: 'User created successfully' });
            const { password, googleId, ...userData } = newUser; // we remove the password from the user object so we dont send to client
            const accessToken = jwt.sign({ ...userData }, process.env.JWT_SECRET, { expiresIn: '30d' });
            // we can add expiry time for the cookie ... example 1 hour then sign in again...
            res.cookie('access_token', accessToken, { httpOnly: true, withCredentials: true, sameSite: 'None', secure: true }).status(200).json({ user: userData });
        } else if (validUser) {
            const { _id, password, googleId, ...userData } = validUser; // we remove the password from the user object so we dont send to client
            const accessToken = jwt.sign({ ...userData }, process.env.JWT_SECRET, { expiresIn: '30d' });
            // we can add expiry time for the cookie ... example 1 hour then sign in again...
            res.cookie('access_token', accessToken, { httpOnly: true, withCredentials: true, sameSite: 'None', secure: true }).status(200).json({ user: userData });
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Somthing went wrong, please enter valid information' });
    }
};


export const logout = (req, res) => {
    res.clearCookie('access_token', {
        httpOnly: true,
        withCredentials: true,
    });

    res.status(200).json({ message: 'User logged out' });
};



// Email verification handler
export const verifyEmail = async (req, res) => {
    const { token } = req.query;
    // console.log('Received token:', token);

    if (!token) {
        // console.log('Token not provided');
        return res.status(400).json({ message: 'Invalid verification link.' });
    }

    try {
        const user = await usersCollection.findOne({ verificationToken: token });
        // console.log('User found:', user);

        if (!user) {
            // console.log('Invalid token or token expired');
            return res.status(400).json({ message: 'Invalid verification link or token has expired.' });
        }

        await usersCollection.updateOne(
            { id: user.id }, // Use _id for updating the user
            { $set: { isVerified: true }, $unset: { verificationToken: "" } }
        );

        console.log('User verified successfully');
        return res.status(200).json({ message: 'Email verified successfully. You can now log in.' });
    } catch (error) {
        console.error('Error during email verification:', error);
        return res.status(500).json({ message: 'An error occurred during verification.' });
    }
};

