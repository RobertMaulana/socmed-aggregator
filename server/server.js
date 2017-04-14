const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors');

const index = require("./routes/index");
const twitter = require("./routes/twitter");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", index);
app.use("/twitter", twitter);

app.listen(3000, () => {
  console.log(`Server listened!`);
})
