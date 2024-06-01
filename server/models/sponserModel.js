import { db } from "../config/connectMongodb.js";
// creating collection with schema
export const sponsersCollection = db.collection('sponsers');
// making sure the emeil or username is unique