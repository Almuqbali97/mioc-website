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
//     }
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
//     };
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
// export { db, connectDB }
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

// database setup
const mongoDBURL = process.env.MONGODB_URL;

// creating new client with extended timeouts
const mongoClient = new MongoClient(mongoDBURL, {
    family: 4,
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
    connectTimeoutMS: 30000, // 30 seconds connection timeout
    socketTimeoutMS: 60000 // 60 seconds socket timeout
});

// creating db
const db = mongoClient.db(process.env.DB_NAME);

async function connectDB() {
    try {
        await mongoClient.connect();
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
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

export { db, connectDB };
