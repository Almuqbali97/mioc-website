// import { db } from "../config/connectMongodb.js";
// // creating collection with schema
// export const sponsersCollection = db.collection('sponsers');
// making sure the emeil or username is unique

import { connectDB } from "../config/connectMongodb.js";

let sponsersCollection;

(async () => {
    const db = await connectDB();
    sponsersCollection = db.collection('sponsers');
})();

export { sponsersCollection };
