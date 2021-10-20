const express = require("express");
const routes = require("./routes/index"); 
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/Partymembers');
const db = mongoose.connection

db.once('open', async () => {
  console.log('Connected!');
});

const app = express();
app.use("/", routes);//connects routes to app
app.use(express.json());//converts req bodies to json


app.listen(3000, () => {
  console.log("Now listening on port 3000");
});
