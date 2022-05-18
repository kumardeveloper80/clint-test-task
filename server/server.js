const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const port = process.env.PORT || 8001;

const app = express();

app.use(cors());
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Silence is Golden");
});

dotenv.config({ path: "./config/config.env" });

app.use("/", require("./routes/index"));

app.listen(port, () => {
  console.log("App running on port 8001");
});
