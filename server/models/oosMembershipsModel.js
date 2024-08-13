import { getDb } from "../config/connectMongodb.js";
// creating collection with schema
// export const oosMembershipCollection = db.collection('oosMemberships');
export const getOosMembershipCollection = () => {
    return getDb().collection('oosMemberships');
};