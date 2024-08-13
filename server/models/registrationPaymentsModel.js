import { getDb } from "../config/connectMongodb.js";
// creating collection with schema
// export const registrationPaymentsCollection = db.collection('registrationPayments');
export const getRegistrationPaymentsCollection = () => {
    return getDb().collection('registrationPayments');
};