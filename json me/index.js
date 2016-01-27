const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3] || path.join(__dirname, 'json.log'), function(err, content) {
    if(err) {
      throw err;
    }
    res.json(JSON.parse(content.toString()));
  });
});

app.listen(process.argv[2] || 3000);
