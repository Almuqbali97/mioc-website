import { db } from "../config/connectMongodb.js";
// creating collection with schema
export const oosPaymentsCollection = db.collection('oosPayments');