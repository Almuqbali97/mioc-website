// import { db } from "../config/connectMongodb.js";
// // creating collection with schema
// export const oosMembershipCollection = db.collection('oosMemberships');

import { connectDB } from "../config/connectMongodb.js";

let oosMembershipCollection;

(async () => {
    const db = await connectDB();
    oosMembershipCollection = db.collection('oosMemberships');
})();

export { oosMembershipCollection };
