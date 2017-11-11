const fs = require('fs');
const solc = require('solc');


function compile(code, contract_name) {
    compiledCode = solc.compile(code);
    abiDefinition = JSON.parse(compiledCode.contracts[":" + contract_name].interface);
    byteCode = compiledCode.contracts[":" + contract_name].bytecode;
    return JSON.stringify({
        "abiDef": abiDefinition,
        "bytecode": byteCode
    });
}

module.exports.compile = compile;
