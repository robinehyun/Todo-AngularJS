var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  console.log(req);
  res.send("Hello Todo-AngularJS!");
});

app.listen(3000, function(){
  console.log('Todo Server is running!');
});
