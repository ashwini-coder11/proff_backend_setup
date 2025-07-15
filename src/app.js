import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(express.json({limit: "15kb"}));
app.use(express.urlencoded({extended: true, limit: "15kb"}));
app.use(express.static("public"));
app.use(cookieParser());


//import routes
import userRoutes from "./routes/user.routes.js";
app.use("/api/v1/users", userRoutes);

export { app };