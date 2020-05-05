
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");

const sensorRoutes = require("./routes/sensors");

var app = express();

app.use(bodyParser.json());
app.use("/sensors",sensorRoutes);


app.listen(5000);