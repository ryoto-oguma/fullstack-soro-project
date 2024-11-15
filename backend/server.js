const express = require("express");

const app = express();

const healthCheckRoutes = require("./routes/healthCheckRoutes");

app.use("/api/health", healthCheckRoutes);

module.exports = app;
