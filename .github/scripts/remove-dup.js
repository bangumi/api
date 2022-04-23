const fs = require('fs');
const yaml = require('js-yaml');

function loadYaml(p) {
    return yaml.load(fs.readFileSync(p, {encoding: 'utf-8'}));
}

function writeJson(p, content) {
    fs.writeFileSync(p, JSON.stringify(content, null, 2), {encoding: 'utf-8'});
}

const v0Doc = loadYaml('open-api/v0.yaml');
const apiDoc = loadYaml('open-api/api.yml');

const apiDocKeys = Object.keys(apiDoc.components.schemas);
for (const key of apiDocKeys) {
    if (v0Doc.components.schemas[key]) {
        delete apiDoc.components.schemas[key];
    }
}

writeJson('open-api/api-gen.json', apiDoc);