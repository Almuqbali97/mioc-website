import { getDb } from "../config/connectMongodb.js";
// creating collection with schema
// export const sponsersCollection = db.collection('sponsers');
export const getSponsersCollection = () => {
    return getDb().collection('sponsers');
};
// making sure the emeil or username is unique