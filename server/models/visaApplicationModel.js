import { db } from "../config/connectMongodb.js";
// creating collection with schema
export const visaApplicationCollection = db.collection('visaApplications');