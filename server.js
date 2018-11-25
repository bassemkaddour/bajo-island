const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const cookieSession = require('cookie-session');


// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

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
  console.log('COOKIESERVER', req.session.id)
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.post('/register', (req, res) => {
  req.session.id = 2;
  res.send('hi');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port", this.address().port);
});
