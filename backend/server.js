const express = require("express");

const app = express();

const healthCheckRoutes = require("./routes/healthCheckRoutes");

app.use("/", healthCheckRoutes);

module.exports = app;
