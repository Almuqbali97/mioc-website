// import { abstractsCollection } from "../models/abstractModel.js";
import { getAbstractsCollection } from "../models/abstractModel.js";
import { validateEmail } from "../helpers/validateEmail.js";
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { GetObjectCommand, S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { abstractNotificationEmail, abstractSuccssfullSubmissionEmail } from '../utils/notificationEmails.js'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
dotenv.config();


const s3Client = new S3Client({
  region: process.env.AWS_S3_BUCKET_REGION, // Make sure this environment variable is set
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,  // Ensure these are set
    secretAccessKey: process.env.AWS_S3_SECRET_KEY
  }
});


//////////////

export const submitAbstract = async (req, res) => {
  const abstractsCollection = getAbstractsCollection();
  const id = uuidv4();
  const {
    firstName,
    lastName,
    email,
    mobile,
    topic,
    title,
    mainAuthorFirstName,
    mainAuthorLastName,
    mainAuthorEmail,
    mainAuthorOrganization,
    mainAuthorCountry,
    presentationType,
    researchType,
    objective,
    methods,
    description,
    results,
    conclusions,
    additionalAuthors,
  } = req.body;

  if (!email || !mobile || !topic || !title || !presentationType) {
    return res.status(401).json({ message: 'Please enter all required fields' });
  }

  if (!validateEmail(email)) {
    return res.status(401).json({ message: 'Invalid email address' });
  }

  try {
    const newAbstract = {
      id: id,
      firstName,
      lastName,
      email: email.toLowerCase(),
      phoneNo: mobile,
      title: title,
      mainAuthorFirstName,
      mainAuthorLastName,
      mainAuthorEmail,
      mainAuthorOrganization,
      mainAuthorCountry,
      status: 'pending',
      topic: topic,
      presentationType: presentationType,
      researchType: researchType,
      description,
      objective,
      methods,
      results,
      conclusions,
      additionalAuthors: additionalAuthors ? JSON.parse(additionalAuthors) : [],
      created_at: new Date(),
    };

    await abstractsCollection.insertOne(newAbstract);
    await abstractSuccssfullSubmissionEmail(email, firstName, lastName, title, id);
    // await abstractNotificationEmail(topic);
    return res.status(201).json({ message: 'Abstract submitted successfully' });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Something went wrong please try again' });
  }
};


export const submitVideoAbstract = async (req, res) => {
  const abstractsCollection = getAbstractsCollection();
  const id = uuidv4();
  const {
    firstName,
    lastName,
    email,
    mobile,
    topic,
    title,
    mainAuthorFirstName,
    mainAuthorLastName,
    mainAuthorEmail,
    mainAuthorOrganization,
    mainAuthorCountry,
    presentationType,
    description,
    additionalAuthors,
    fileName, // Expecting the filename to be provided in the request body
  } = req.body;
  if (!email || !mobile || !topic || !title || !presentationType) {
    return res.status(401).json({ message: 'Please enter all required fields' });
  }

  if (!validateEmail(email)) {
    return res.status(401).json({ message: 'Invalid email address' });
  }

  if (!fileName) {
    return res.status(401).json({ message: 'Please provide the uploaded video file name' });
  }

  try {
    const newAbstract = {
      id: id,
      firstName,
      lastName,
      email: email.toLowerCase(),
      phoneNo: mobile,
      title: title,
      mainAuthorFirstName,
      mainAuthorLastName,
      mainAuthorEmail,
      mainAuthorOrganization,
      mainAuthorCountry,
      status: 'pending',
      topic: topic,
      presentationType: presentationType,
      description,
      fileName: fileName, // Use the provided filename
      additionalAuthors: additionalAuthors ? JSON.parse(additionalAuthors) : [],
      created_at: new Date(),
    };

    await abstractsCollection.insertOne(newAbstract);
    await abstractSuccssfullSubmissionEmail(email, firstName, lastName, title, id);
    // await abstractNotificationEmail(topic);
    return res.status(201).json({ message: 'Abstract submitted successfully' });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Something went wrong please try again' });
  }
};

export const getAbstractById = async (req, res) => {
  const abstractsCollection = getAbstractsCollection();
  const { id } = req.params;

  try {
    const abstract = await abstractsCollection.findOne({ id });

    if (!abstract) {
      return res.status(404).json({ message: 'Abstract not found' });
    }

    return res.status(200).json(abstract);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Something went wrong, please try again' });
  }
};


export const downloadSpesificAbstract = async (req, res) => {
  const abstractsCollection = getAbstractsCollection();
  try {
    const key = req.params.key;
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
    });

    const presignedURL = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    res.status(200).json({ presignedURL });
  } catch (error) {
    console.error('Error generating presigned URL:', error);
    res.status(500).json({ message: 'Could not generate presigned URL' });
  }
};


export const getAllAbstracts = async (req, res) => {
  const abstractsCollection = getAbstractsCollection();
  try {
    const abstracts = await abstractsCollection.find().toArray();
    res.status(200).json(abstracts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "could not fetch products data" });
  }
}


export const reviewAbstract = async (req, res) => {
  const abstractsCollection = getAbstractsCollection();
  const { id } = req.params;
  const { rating, comment } = req.body;

  if (!rating || !comment) {
    return res.status(400).json({ message: 'Rating and comment are required.' });
  }

  try {
    const updateResult = await abstractsCollection.updateOne(
      { id },
      {
        $set: {
          status: 'reviewed',
          review: {
            rating: parseInt(rating, 10),
            comment: comment,
            reviewedAt: new Date(),
          },
        },
      }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(404).json({ message: 'Abstract not found.' });
    }

    return res.status(200).json({ message: 'Review submitted successfully.' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Something went wrong, please try again.' });
  }
};

export const getAbstractsByEmail = async (req, res) => {
  const abstractsCollection = getAbstractsCollection();
  const { email } = req.params;

  try {
    const abstracts = await abstractsCollection.find({ email }).toArray();

    if (abstracts.length === 0) {
      return res.status(404).json({ message: 'No abstracts found for this email' });
    }

    return res.status(200).json(abstracts);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Something went wrong, please try again' });
  }
};


export const updateAbstract = async (req, res) => {
  const abstractsCollection = getAbstractsCollection();
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    phoneNo,
    topic,
    title,
    mainAuthorFirstName,
    mainAuthorLastName,
    mainAuthorEmail,
    mainAuthorOrganization,
    mainAuthorCountry,
    presentationType,
    researchType,
    objective,
    methods,
    description,
    results,
    conclusions,
    additionalAuthors,
    fileName,
  } = req.body;

  if (!email || !phoneNo || !topic || !title || !presentationType) {
    return res.status(401).json({ message: 'Please enter all required fields' });
  }

  if (!validateEmail(email)) {
    return res.status(401).json({ message: 'Invalid email address' });
  }

  let parsedAdditionalAuthors;
  try {
    parsedAdditionalAuthors = additionalAuthors ? JSON.parse(additionalAuthors) : [];
  } catch (error) {
    return res.status(400).json({ message: 'Invalid additional authors format' });
  }

  try {
    const updatedAbstract = {
      firstName,
      lastName,
      email: email.toLowerCase(),
      phoneNo,
      title,
      mainAuthorFirstName,
      mainAuthorLastName,
      mainAuthorEmail,
      mainAuthorOrganization,
      mainAuthorCountry,
      topic,
      presentationType,
      researchType,
      description,
      objective,
      methods,
      results,
      conclusions,
      additionalAuthors: parsedAdditionalAuthors,
      fileName,
      updated_at: new Date(),
    };

    const result = await abstractsCollection.updateOne({ id }, { $set: updatedAbstract });

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Abstract not found' });
    }

    return res.status(200).json({ message: 'Abstract updated successfully' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Something went wrong, please try again' });
  }
};
