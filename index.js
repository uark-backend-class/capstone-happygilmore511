const express = require("express");
const routes = require("./routes/index"); // "./routes/index.js"
/*const characterRoutes = require("./characters");

const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:3000');
async function main(){
    await client.connect();
    console.log('Connection Successful');
    const db = client.db('CHelper');
    const characters = db.collection('characters');
}*/

const app = express();
app.use(routes);//connects routes to app
app.use(express.json());//converts req bodies to json


app.listen(3000, () => {
  console.log("Now listening on port 3000");
});
