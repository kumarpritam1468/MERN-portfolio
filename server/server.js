const PORT = 5000;
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require('cors');
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/services-router");
const adminRoute = require("./router/admin-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

var corsOptions = {
    origin: 'https://pritam-kumar-portfolio.vercel.app/',
    methods: "GET, POST, HEAD, PUT, DELETE, PATCH",
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port : ${PORT}`);
    });
});