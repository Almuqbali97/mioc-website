// import { db } from "../config/connectMongodb.js";
// // creating collection with schema
// export const registrationPaymentsCollection = db.collection('registrationPayments');

import { connectDB } from "../config/connectMongodb.js";

let registrationPaymentsCollection;

(async () => {
    const db = await connectDB();
    registrationPaymentsCollection = db.collection('registrationPayments');
})();

export { registrationPaymentsCollection };
