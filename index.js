const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

//describe request as a json format
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//respond seen in the / page(after server started)
app.get("/", (req, res) => {
  res.json({ message: "Welcome To my first backend" });
});

//run server
app.listen(PORT, () => {
  try {
    console.log("Server running on " + PORT);
  } catch (err) {
    console.log(err.message);
  }
});
