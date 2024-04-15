const app = require("./app");
require("dotenv").config();

const connectDatabase = require("./config/database");

// Connecting database
connectDatabase();
app.listen(process.env.PORT, () => {
  console.log(`Server is working on localhost:${process.env.PORT}`);
});
