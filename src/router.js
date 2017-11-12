const express = require('express');
const app = express();
const compiler = require('./compile.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

var abi;

app.post('http://localhost:3001/submit', function (req, res) {
    var code = req.body.source;
    var contract_name = req.body.name;
    abi = compiler.compile(code, contract_name);
    res.end(abi);
})

app.listen(3001, function () {
      console.log('Example app listening on port 3001!')
})
