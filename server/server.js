const PORT = 5000;
const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utils/db");


app.use(express.json());
app.use("/api/auth", router);

connectDB().then(() => {
    app.listen(PORT, ()=>{
        console.log(`Server running on port : ${PORT}`);
    });
});