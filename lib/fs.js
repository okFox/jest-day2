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
  JSON.stringify(obj), (err) => {
    if(err) throw err;
    return obj;
  };};


module.exports = {
  mkdirp,
  writeJSON
};

