import express from 'express';
import { connectDB } from './config/connectMongodb.js'; // Update path as needed
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import abstractRoutes from './routes/abstractRoutes.js';
import { isAuthenticated } from './middlewares/isAuenticatedMiddleware.js';
import { isAdmin } from './middlewares/isAuthorizedAdmin.js';
import ticketRoutes from './routes/ticketPaymentRoutes.js'
import registrants from './routes/registrantsRoutes.js'
const app = express();
const port = process.env.PORT || 3000;


//middlewares
// cors handiling
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // allow all domains
//     res.setHeader('Access-Control-Allow-Methods', 'GET, PUT,POST,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow credentials
//     next();
// });



app.use(cors({
    origin: ['http://localhost:5000', 'http://localhost:5173', 'https://mioc-website-client.vercel.app', 'https://mioc.org.om'], // Replace with your client URL
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true // Allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json("Hello from api")
})
//routes
app.use('/user', userRoutes);
app.use('/abstract', abstractRoutes)
app.use('/', ticketRoutes)
app.use('/', registrants)

// testing admin auth
app.get('/admin', isAuthenticated, isAdmin, (req, res) => {
    res.json({ user: req.user });
});

app.get('/api/instagram-posts', async (req, res) => {
    try {
        const response = await fetch(`https://graph.instagram.com/7606891449401857/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQWRORnRwUFJGbWZAzSE5UeFA1SEpFWFhVNVYtWFJuY3RzMjBDNzF4a1RwY0FlR0FEb1VZARHZABX0FzaXRfQ25zZAzdCckJScGlhbmo1WmNHNHdOR2pCamhsM2JuVHluMDJ2YVNjdGZAlWkhMUTBQZA1hGMFYzbU1NaU0ZD`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        res.status(500).send('Internal Server Error');
    }
});

(async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
})();