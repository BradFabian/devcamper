const express = require("express");
const dotEnv = require("dotenv");

// Route Files
const bootcamps = require("./routes/bootcamp");

// Load config filr
dotEnv.config({ path: "./config/config.env" });

const app = express();

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
