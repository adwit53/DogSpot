var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var MongoClient = require('mongodb').MongoClient;
app.use(express.static(__dirname + "/../public"));
app.get('/survey', function (req, res) {
res.sendFile( __dirname + "/" + "survey.html" );})
app.get('/get_survey', function (req, res) {
    response = {
  name:req.query.name,
  email:req.query.email,
  likedogs:req.query.likedogs,
  adoptdogs:req.query.adoptdogs,
  havedogs:req.query.havedogs,
  haddogs:req.query.haddogs,
  aboutadoption:req.query.aboutadoption,
  preferadopt:req.query.preferadopt
    };
    

MongoClient.connect('mongodb://localhost:27017/', function(err, db)
{ if (err) throw err;
console.log("Connected to Database");
var dbo=db.db("survey");
//insert document in mongodb
dbo.collection('response').insertmany(response, function(err, result)
{ if (err) throw err;
console.log("1 document inserted in your mongodb database" ); });});
console.log(response); // display in node console window
res.end(JSON.stringify(response));}) // display in browser window
var server = app.listen(8000, function () {
var host = server.address().address
var port = server.address().port
console.log("survey form is listening at http://%s:%s//survey", host,
port)})