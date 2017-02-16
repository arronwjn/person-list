var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser')
var routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/homework');

var db = mongoose.connection;
db.on('error', function (err) {
  console.log(err);
});
db.once('open', function() {
  console.log('connect success');
});

routes(app);

app.listen(8000, function () {
  console.log('listen at port 8000');
});
