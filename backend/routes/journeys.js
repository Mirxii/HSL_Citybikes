const express = require("express");
const router = express.Router();

const { getAllJourneys } = require("../controllers/journeys");

router.get("/", getAllJourneys);

module.exports = router;
