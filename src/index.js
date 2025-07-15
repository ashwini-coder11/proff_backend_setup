//require('dotenv').config("path:./.env");

//import 'dotenv/config'
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
import express from "express";
dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
});


