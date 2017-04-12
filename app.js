var express = require('express');
var bodyParser = require('body-parser');
var routers = require('./routers');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/pic', express.static(__dirname + '/pic'));
app.use('/css', express.static(__dirname + '/css')
app.use('/', routers);

app.listen(port);
