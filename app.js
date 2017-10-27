const fs = require('fs');
const solc = require('solc');


function compile(code) {
    compiledCode = solc.compile(code);
    console.log(compiledCode);
}

module.exports.compile = compile;
