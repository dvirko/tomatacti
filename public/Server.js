const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const mongo = require('mongodb');
const fs = require('fs');
const cors = require('cors');
const app = express();
app.use(cors());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var MongoClient = mongo.MongoClient;
var url = "mongodb+srv://dvir:dvirko1221@data.my748.mongodb.net/?retryWrites=true&w=majority";

app.get('/', urlencodedParser, (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/person', urlencodedParser, (req, res) => {
MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TOMATACTI_DB");
        dbo.collection("person").find({}, { projection: { _id: 0} }).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
          });
        });
});

app.get('/images', urlencodedParser, (req, res) => {
MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("TOMATACTI_DB");
        dbo.collection("images").find({}, { projection: { _id: 0} }).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
          });
        });
});
    
app.listen(3000);