import { getDb } from "../config/connectMongodb.js";
// creating collection with schema
// export const visaApplicationCollection = db.collection('visaApplications');
export const getVisaApplicationCollection = () => {
    return getDb().collection('visaApplications');
};