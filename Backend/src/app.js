import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import productRoutes from "./routes/product/productRoutes.js";
import reviewRoutes from "./routes/review/review.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(cookieParser());

/* routes */
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/reviews", reviewRoutes);

export { app };
