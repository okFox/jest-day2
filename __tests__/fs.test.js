const {
  writeJSON,
  writeJSONFile
} = require('../lib/fs');

const fs = require('fs').promises;


describe('file system functions', () => {
  it('properly stringifys to JSON', () => {
    expect(writeJSON({ name: 'chet', occupation: 'being annoying' })).toEqual('{"name":"chet","occupation":"being annoying"}');
  });
});

//needs a MOCK to work
// describe('writeJSONFile', () => {
//   it('writes a stringified object to a file', () => {
//     return writeJSONFile('path', {})
//       .then(() => expect(fs.writeFile).toHaveBeenCalledWith('path', '{}'));
//   });
// });
