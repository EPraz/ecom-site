const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

let records = [];

// get all students
router.get("/", (req, res) => {
  res.send("App is running...");
});

// create new record
router.post("/add", (req, res) => {
  res.send("New record added.");
});

// delete existing record
router.delete("/delete", (req, res) => {
  res.send("Deleted existing record");
});

// updating existing record
router.get("/put", (req, res) => {
  res.send("updating existing record");
});

// showing demo record
router.get("/demo", (req, res) => {
  res.json([
    {
      id: "001",
      name: "Smith",
      email: "smith@gmail.com",
    },
  ]);
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
