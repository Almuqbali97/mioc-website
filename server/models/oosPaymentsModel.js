// import { db } from "../config/connectMongodb.js";
// // creating collection with schema
// export const oosPaymentsCollection = db.collection('oosPayments');

import { connectDB } from "../config/connectMongodb.js";

let oosPaymentsCollection;

(async () => {
    const db = await connectDB();
    oosPaymentsCollection = db.collection('oosPayments');
})();

export { oosPaymentsCollection };
