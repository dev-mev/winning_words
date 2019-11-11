const axios = require("axios");
const express = require("express");

const router = express.Router();

// define the home page route
router.get("/word/:word", (req, res) => {
  const baseUrl = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
  axios.get(`${baseUrl}${encodeURIComponent(req.params.word)}?key=${process.env.API_KEY}`)
    .then((response) => {
      try {
        res.send(response.data[0].shortdef[0]);
      } catch {
        res.send("Definition is unavailable");
      }
    });
});

module.exports = router;
