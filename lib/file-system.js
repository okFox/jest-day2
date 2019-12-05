// const uuid = require('uuid/v4');

const fs = require('fs').promises;


const mkdirp = (path) => {
  fs.mkdir(__dirname + path, { recursive: true }, (err) => {
    if(err) throw err;
  });};

//just stringify
const writeJSON = (obj) => {
  const json = JSON.stringify(obj);
  return json;
};

//write JSON with writeFile
const writeJSONFile = (path, obj) => {
  const json = JSON.stringify(obj);
  return fs.writeFile('path', json);
};




module.exports = {
  mkdirp,
  writeJSON,
  writeJSONFile
};

