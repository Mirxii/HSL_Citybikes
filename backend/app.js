const express = require("express");
const journeys = require("./routes/journeys");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api/journeys", journeys);

module.exports = app;
