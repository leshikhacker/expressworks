const express = require('express');
const path = require('path');
const app = express();

app.use(require('stylus').middleware({
  src: path.join(process.argv[3] || path.join(__dirname, 'public')),
  dest: path.join(process.argv[3] || path.join(__dirname, 'public'))
}))
.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
.listen(process.argv[2]);
