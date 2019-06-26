const express = require("express");
const mongoose = require("mongoose");
const routes = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect(
    "mongodb://localhost:27017/portfolio", 
    {
        useNewUrlParser: true
    }
);

app.use("/api", routes);
app.listen(8080);