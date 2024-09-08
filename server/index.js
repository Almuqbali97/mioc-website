import express from 'express';
import { connectDB } from './config/connectMongodb.js'; // Update path as needed
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import abstractRoutes from './routes/abstractRoutes.js';
import { isAuthenticated } from './middlewares/isAuenticatedMiddleware.js';
import { isAdmin } from './middlewares/isAuthorizedAdmin.js';
import oosMembershipRoutes from './routes/oosMembershipRouts.js'
import ticketRoutes from './routes/PaymentRoutes.js'
import registrants from './routes/registrationRoutes.js'
const app = express();
const port = process.env.PORT || 3000;
import sponserRoute from './routes/sponserRoutes.js'
import visaApplicationRoute from './routes/visaApplicaonsRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('view engine', 'ejs'); // Replace 'ejs' with whatever engine you're using
app.set('views', path.join(__dirname, 'views'));

app.use(cors({
    origin: ["*", 'http://localhost:5000', 'http://localhost:5173', 'https://mioc-website-client.vercel.app', 'https://mioc.org.om', 'https://mti.bankmuscat.com:6443/', "https://mioc.netlify.app/"], // Replace with your client URL
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true // Allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json("Hello from api")
});

// app.get('/keep-alive', (req, res) => {
//     res.status(200).send('Server is alive');
// });

//routes
app.use('/user', userRoutes);
app.use('/abstract', abstractRoutes)
app.use('/', oosMembershipRoutes)
app.use('/', ticketRoutes)
app.use('/', registrants)
app.use('/', sponserRoute)
app.use('/', visaApplicationRoute)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


(async () => {
    try {
        await connectDB(); // Ensure DB connection before starting the server
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start the server due to MongoDB connection issue:', error);
        process.exit(1); // Exit if the database connection fails
    }
})();
