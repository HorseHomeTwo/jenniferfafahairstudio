var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/root'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(port, function() {
    console.log('Server running on port ' + port);
});