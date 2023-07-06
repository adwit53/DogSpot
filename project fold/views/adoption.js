var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var MongoClient = require('mongodb').MongoClient;
app.use(express.static(__dirname + "/../public"));
app.get('/adopt', function (req, res) {
res.sendFile( __dirname + "/" + "MainForm.html" );})
app.get('/get_adopt', function (req, res) {
    response = {
  firstname:req.query.firstname,
  lastname:req.query.lastname,
  petname:req.query.petname,
  email:req.query.email,
  area:req.query.area,
  phone:req.query.phone,
  street:req.query.street,
  city:req.query.city,
  state:req.query.state,
  zip:req.query.zip,
  country:req.query.country,
  anypet:req.query.anypet,
  Petname1:req.query.Petname1
    };
    

MongoClient.connect('mongodb://localhost:27017/', function(err, db)
{ if (err) throw err;
console.log("Connected to Database");
var dbo=db.db("adoption");
//insert document in mongodb
dbo.collection('adopters').insertmany(response, function(err, result)
{ if (err) throw err;
console.log("1 document inserted in your mongodb database" ); });});
console.log(response); // display in node console window
res.end(JSON.stringify(response));}) // display in browser window
var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s//adopt", host,
port)})