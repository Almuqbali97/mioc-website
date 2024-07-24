import { db } from "../config/connectMongodb.js";
// creating collection with schema
export const registrationPaymentsCollection = db.collection('registrationPayments');