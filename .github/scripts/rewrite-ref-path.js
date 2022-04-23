const fs = require('fs');

function loadFile(p) {
    return fs.readFileSync(p, {encoding: 'utf-8'});
}

function writeFile(p, content) {
    fs.writeFileSync(p, content, {encoding: 'utf-8'});
}

const apiDoc = loadFile('open-api/api.yml');

writeFile('open-api/api-gen.yml', apiDoc.replaceAll('v0.yaml#/components/schemas', '#/components/schemas'));

