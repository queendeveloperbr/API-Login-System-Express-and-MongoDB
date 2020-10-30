const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user"); 
const InitiateMongoServer = require("./config/db");

InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/api", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});