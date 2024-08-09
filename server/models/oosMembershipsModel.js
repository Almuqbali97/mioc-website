import { db } from "../config/connectMongodb.js";
// creating collection with schema
export const oosMembershipCollection = db.collection('oosMemberships');