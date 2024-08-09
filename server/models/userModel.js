import { db, connectDB } from "../config/connectMongodb.js";
// creating collection with schema
// await connectDB();
export const usersCollection = db.collection('users');
// making sure the emeil or username is unique
usersCollection.createIndex({ "email": 1 }, { unique: true });
// defining validation schema, NOTE: we could modifiy the schema to allow more user address
// db.createCollection("users", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required: ["email",],
//             properties: {
//                 firstName: {
//                     bsonType: "string",
//                     description: "First name must be a string"
//                 },
//                 lastName: {
//                     bsonType: "string",
//                     description: "Last name must be a string"
//                 },
//                 email: {
//                     bsonType: "string",
//                     description: "Email must be a string and is required",
//                 },
//                 password: {
//                     bsonType: "string",
//                     description: "Password must be a string and is required"
//                 },
//                 phone_NO: {
//                     bsonType: "string"
//                 },
//                 address: {
//                     bsonType: ["object", "null"],
//                     properties: {
//                         country: {
//                             bsonType: "string",
//                         },
//                         city: {
//                             bsonType: "string"
//                         },
//                         street: {
//                             bsonType: "string"
//                         },
//                         zip: {
//                             bsonType: "string"
//                         },
//                         latitude: {
//                             bsonType: "double"
//                         },
//                         longitude: {
//                             bsonType: "double"
//                         },
//                     }
//                 },
//                 admin_role: {
//                     bsonType: "bool",
//                 },
//                 admin_level: {
//                     bsonType: "number"
//                 },
//                 created_at: {
//                     bsonType: "date",
//                     description: "Creation date of the user document"
//                 },
//                 edited_at: {
//                     bsonType: "date",
//                     description: "edit date of the user document"
//                 },
//             }
//         }
//     }
// });