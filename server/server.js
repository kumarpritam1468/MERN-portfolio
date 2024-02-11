const PORT = 5000;
const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("api/auth", router);

app.get('/', (req,res) => {
    res.status(200).send("Hello there!");
})

app.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`);
})