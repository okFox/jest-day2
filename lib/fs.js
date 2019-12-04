// const uuid = require('uuid/v4');
const fs = require('fs');

// class Model {

//   constructor() {
//     this.model = [];
//   }




//   writeJSON(obj) {
//     JSON.stringify(obj);
//   }

// } // end class

const mkdirp = (path) => {
  fs.mkdir(__dirname + path, { recursive: true }, (err) => {
    if(err) throw err;
  });};

const writeJSON = (obj) => {
  const json = JSON.stringify(obj);
  return json;
};

//write JSON with filewrite
const writeJSONFile = (path, obj) => {
  const json = JSON.stringify(obj);
  return fs.writeFile(path, json);
};




module.exports = {
  mkdirp,
  writeJSON,
  writeJSONFile
};

