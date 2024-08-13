import { getDb } from "../config/connectMongodb.js";
// creating collection with schema
// export const abstractsCollection = db.collection('abstracts');
export const getAbstractsCollection = () => {
    return getDb().collection('abstracts');
};
// making sure the emeil or username is unique
// abstractsCollection.createIndex({ "fileName": 1 }, { unique: true });
// defining validation schema, NOTE: we could modifiy the schema to allow more user address
// db.createCollection("abstracts", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required: ["email","fileName"],
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
//                 phoneNo: {
//                     bsonType: "string"
//                 },
//                 fileName: {
//                     bsonType:"string"
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