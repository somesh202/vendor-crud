const express = require("express");
const app = express();
let cors = require("cors");
app.use(cors());
app.use(express.json());
//Route Imports
const vendor = require("./routes/vendorRoute");
app.use("/", vendor);

module.exports = app;
