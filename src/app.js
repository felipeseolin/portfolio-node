const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect(
    "mongodb://localhost:27017/portfolio", 
    {
        useNewUrlParser: true
    }
);

app.use("/api", routes);
app.listen(8080);