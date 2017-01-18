const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const multiPart = require('connect-multiparty');
const multipart = multiPart();

app.get('/', (req, res) => {
  var options = {
    root: `${__dirname}/templates/`,
  };
  res.sendFile('index.html', options, (err) => {
    res.end();
  });
});


app.post('/get-file-size', multipart, (req, res) => {
  res.send(JSON.stringify({ size: req.files.file.size }));
  res.end();
});

app.get('*', (req, res) => {
  res.send('404');
  res.end();
});

app.listen(process.env.PORT || 8080);
