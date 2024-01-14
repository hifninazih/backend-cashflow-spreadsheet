// Load Express
const express = require("express");
// Load path
const path = require("path");
// Create Express App
const app = express();
const cors = require("cors");

const axios = require("axios");

app.use(cors());
app.use(express.json()); // JSON-encoded Middleware
app.use(express.urlencoded({ extended: true })); // URL-encoded Middleware untuk parsing body

app.post("/", (req, res) => {
  axios
    .post(
      "https://script.google.com/macros/s/AKfycbxfQwmbySGrUF7K31M5Fo0K0j_RuUY5V0oLm3wb487psrBFBCRUPZbesGBo8RvJxXv9Pg/exec",
      req.body
    )
    .then((response) => {
      const data = response.data;
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
