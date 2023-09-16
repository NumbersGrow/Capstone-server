const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
const cors = require("cors");
require("dotenv").config();
const { CORS_ORIGIN, PORT, BACKEND_URL } = process.env;

const farmRoutes = require("./routes/farmRoute");
const farmProductionRoutes = require("./routes/farmProductionRoute");
const festivalRoutes = require("./routes/festivalRoute");
const festivalProductionRoutes = require("./routes/festivalProductionRoute");

app.use(fileupload());
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/farms", farmRoutes);
app.use("/farm_production", farmProductionRoutes);
app.use("/festivals", festivalRoutes);
app.use("/festival_production", festivalProductionRoutes);

app.listen(PORT, () => {
  console.log(`App listening at ${BACKEND_URL}:${PORT}`);
});

app.get("/", (req, res) => {
  return res.send("Test successful");
});
