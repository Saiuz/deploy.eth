const express = require('express');
const app = express();
const compiler = require('./compile.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

var abi;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/submit', function (req, res) {
    var code = req.body.source;
    abi = compiler.compile(code, "Bounties");
    res.end(abi);
})

app.listen(8000, function () {
      console.log('Example app listening on port 8000!')
})
