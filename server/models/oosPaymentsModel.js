import { getDb } from "../config/connectMongodb.js";
// creating collection with schema
// export const oosPaymentsCollection = db.collection('oosPayments');
export const getOosPaymentsCollection = () => {
    return getDb().collection('oosPayments');
};