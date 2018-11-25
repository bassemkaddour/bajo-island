const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const bodyParser  = require('body-parser');
const cookieSession = require('cookie-session');


// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
  name: 'session',
  keys: ['blueGarbage']
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.post('/register', (req, res) => {
  console.log('before cookie', req.body);
  req.session.id = req.body.name;
  console.log('after cookie', req.session.id);
  res.send('hi');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port", this.address().port);
});
