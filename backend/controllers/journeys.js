const journeys = require("../models/journeys");

const getAllJourneys = async (req, res) => {
  try {
    const response = await journeys.findAll();
    if (response) {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

module.exports = {
  getAllJourneys,
};
