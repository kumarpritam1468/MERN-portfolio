const PORT = 5000;
const express = require("express");
require("dotenv").config();
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

connectDB().then(() => {
    app.listen(PORT, ()=>{
        console.log(`Server running on port : ${PORT}`);
    });
});