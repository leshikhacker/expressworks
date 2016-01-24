const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
  res.write(req.body.str.split('').reverse().join(''));
  res.end();
});

app.listen(process.argv[2]);
