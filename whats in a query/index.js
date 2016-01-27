const express = require('express');
const app = express();

app.get('/search', function(req, res) {
  res.json(req.query);
});

app.listen(process.argv[2] || 3000);
