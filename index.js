const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;

const url = 'mongo local url paste here';
const db = null

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    console.log('YOu are connected Jithin bro');
    db = client.db('database name replace here');
});

// work with db object and query mongo

app.get('/', (req, res) => {
    res.send('Soti sucessfull');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
