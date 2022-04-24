const fs = require('fs');

const apiDoc = fs.readFileSync('open-api/api.yml', {encoding: 'utf-8'});

fs.writeFileSync('open-api/api-gen.yml', apiDoc.replaceAll('v0.yaml#/components/schemas', '#/components/schemas'));

