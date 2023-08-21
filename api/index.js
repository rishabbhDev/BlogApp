const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.post("/register", function (req, res) {
  res.json("Test Ok.........");
});

app.listen(4000);
