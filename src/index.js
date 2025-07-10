//require('dotenv').config("path:./.env");

import 'dotenv/config'
import connectDB from "./db/index.js";
import express from "express";


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


