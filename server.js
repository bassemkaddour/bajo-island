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

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port", this.address().port);
});
