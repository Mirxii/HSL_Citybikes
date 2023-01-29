const express = require("express");
const journeys = require("./routes/journeys");

const app = express();
app.use(express.json());

app.use("/api/journeys", journeys);

module.exports = app;
