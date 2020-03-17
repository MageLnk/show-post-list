const express = require("express");
// Import conexion to DB
require("./db/moongose");
// Import Api conexion

// Import Utils
require("./utils/compareServer");
require("./utils/startCheckServer");
// Import models

// Server Up
const app = express();
const port = process.env.PORT || 3010;
// Server Json Up
app.use(express.json());
// Apis

//
app.listen(port, () => {
  console.log("Server up on port ", port);
});
