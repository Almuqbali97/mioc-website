// import { MongoClient, ServerApiVersion } from 'mongodb';
// import dotenv from 'dotenv';
// dotenv.config();
// // // database setup
// const mongoDBURL = process.env.MONGODB_URL;
// // creating new client
// const mongoClient = new MongoClient(mongoDBURL, {
//     family: 4,
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     },
//     // connectTimeoutMS: 30000, // 30 seconds
//     // socketTimeoutMS: 10000, // 10 seconds
// });

// // creating db

// export async function connectDB() {
//     try {
//         await mongoClient.connect();
//         console.log('mongodb connected');
//     } catch (error) {
//         console.error('Failed to connect to MongoDB', error);
//         process.exit(1);
//     };
// }

// export const db = mongoClient.db(process.env.DB_NAME);

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
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoDBURL = process.env.MONGODB_URL;

const mongoClient = new MongoClient(mongoDBURL, {
    family: 4,
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let db;

export async function connectDB() {
    try {
        if (!db) {
            await mongoClient.connect();
            console.log('MongoDB connected');
            db = mongoClient.db(process.env.DB_NAME);
        }
        return db;
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
}

export function getDb() {
    if (!db) {
        throw new Error('Database not connected. Call connectDB() first.');
    }
    return db;
}

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






