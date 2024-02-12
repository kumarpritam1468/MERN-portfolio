const PORT = 5000;
const express = require("express");
const app = express();
const router = require("./router/auth-router");


app.use(express.json());
app.use("/api/auth", router);

app.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`);
})