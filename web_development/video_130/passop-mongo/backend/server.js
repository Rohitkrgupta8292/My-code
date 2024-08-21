const express = require('express');
const dotEnv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser')
const cors = require('cors');
dotEnv.config();


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';
const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(cors());
client.connect();

// get all the password
app.get('/', async(req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const result = await collection.find({}).toArray();
  res.json(result);
})
// save the password
app.post('/', async(req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const result = await collection.insertOne(password);
  res.send({success:true, result: result});
})

// Delete the password
app.delete('/', async(req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const result = await collection.deleteOne(password);
    res.send({success:true, result: result});
  })
  

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
})