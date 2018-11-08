const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'dist/types/index.d.ts');
const indexDTs = fs.readFileSync(filename, 'utf8');

const lines = indexDTs.split('\n');
lines.splice(5, 0, '// @ts-ignore');

const result = lines.join('\n');

fs.writeFileSync(filename, result);
