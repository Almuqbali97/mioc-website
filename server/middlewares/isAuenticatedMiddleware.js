import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const isAuthenticated = (req, res, next) => {
    const secretKey = process.env.JWT_SECRET;
    const accessToken = req.cookies?.access_token;

    if (!accessToken) return res.status(401).json({ message: 'Unauthorized, please login to access this page' });

    jwt.verify(accessToken, secretKey, (err, user) => {
        if (err) return res.status(403).json({ message: 'Forbidden' });
        req.user = user;
        next();
    });
};
