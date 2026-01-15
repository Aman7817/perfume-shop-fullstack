import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/product/productRoutes.js';
import reviewRoutes from './routes/review/review.routes.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "20kb"}));
app.use(cookieParser());

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/reviews", reviewRoutes);

export { app };