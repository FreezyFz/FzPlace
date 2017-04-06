var express = require('express');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

var port = process.env.PORT || 3000;

app.set('view engine', 'html');

app.use('/pic', express.static(__dirname + '/pic'));
app.use('/css', express.static(__dirname + '/css'));

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('mine');
});

app.get('/page2', function(req, res) {
	res.render('page2');
});

app.get('/page3', function(req, res) {
	res.render('page3');
});

app.get('/page4', function(req, res) {
	res.render('page4');
});

app.get('/page5', function(req, res) {
	res.render('page5');
});


app.listen(port);
