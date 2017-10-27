const solc = require('solc');
const fs = require('fs');
code = fs.readFileSync(__dirname + "/" + process.argv[2]).toString();
compiledCode = solc.compile(code);
abiDefinition = JSON.parse(compiledCode.contracts[":" + process.argv[1]].interface);
byteCode = compiledCode.contracts[":" + process.args[3]].bytecode;

fs.writeFileSync('abi.js', abiDefinition + "\n" + byteCode);
