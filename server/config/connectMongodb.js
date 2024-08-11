import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
// // database setup
const mongoDBURL = process.env.MONGODB_URL;
// creating new client
const mongoClient = new MongoClient(mongoDBURL, {
    family: 4,
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
    connectTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 10000, // 10 seconds
});

// creating db

export async function connectDB() {
    try {
        await mongoClient.connect();
        console.log('mongodb connected');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    };
}

export const db = mongoClient.db(process.env.DB_NAME);

async function closeDB() {
    try {
        await mongoClient.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error closing MongoDB connection', error);
    }
}

// Close connection gracefully
process.on('SIGINT', closeDB);
process.on('SIGTERM', closeDB);

// import { MongoClient, ServerApiVersion } from 'mongodb';
// import dotenv from 'dotenv';
// dotenv.config();

// // database setup
// const mongoDBURL = process.env.MONGODB_URL;

// // creating new client
// const mongoClient = new MongoClient(mongoDBURL, {
//     family: 4,
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     },
//     connectTimeoutMS: 30000, // 30 seconds
//     socketTimeoutMS: 10000, // 10 seconds
// });

// // creating db
// const db = mongoClient.db(process.env.DB_NAME);

// async function connectDB() {
//     try {
//         await mongoClient.connect();
//         console.log('mongodb connected');
//     } catch (error) {
//         console.error('Failed to connect to MongoDB', error);
//         process.exit(1);
//     }
// }

// async function closeDB() {
//     try {
//         await mongoClient.close();
//         console.log('MongoDB connection closed');
//     } catch (error) {
//         console.error('Error closing MongoDB connection', error);
//     }
// }

// // Close connection gracefully
// process.on('SIGINT', closeDB);
// process.on('SIGTERM', closeDB);

// export { db, connectDB };

// import { MongoClient, ServerApiVersion } from "mongodb";

// // Replace the placeholder with your Atlas connection string
// const uri = process.env.MONGODB_URL;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// }
// );

// export async function connectDB() {
//     try {
//         // Connect the client to the server (optional starting in v4.7)
//         await client.connect();

//         // Send a ping to confirm a successful connection
//         await client.db(process.env.DB_NAME).command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }




