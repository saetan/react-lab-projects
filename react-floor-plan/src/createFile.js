var argv = require('minimist')(process.argv.slice(2));
let fs = require('fs');
let fileName = argv.f;

jsxContent = `
import './${fileName}.css';

function ${fileName}() {
  return (
    <div>
      <h1>${fileName}</h1>
    </div>
  );
}

export default ${fileName};


`
cssContent = `
div {
  border: 1px solid grey;
  margin: 5px;
  padding: 5px;
}

`


fs.writeFile(`${fileName}.jsx`, jsxContent, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});

fs.writeFile(`${fileName}.css`, cssContent, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});