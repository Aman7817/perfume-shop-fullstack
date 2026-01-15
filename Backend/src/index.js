import {app} from "./app.js"
import  connectDB  from "./database/db.js";
import { config } from "dotenv";

config();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 5000}`);
        })
    })
    .catch((err) => {
        console.log("Failed to connect to the database:", err);
    });