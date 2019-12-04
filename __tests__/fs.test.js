const {
  mkdirp,
  writeJSON
} = require('../lib/fs');


describe('file system functions', () => {
  it('properly stringifys to JSON', () => {
    expect(writeJSON({ name: 'chet', occupation: 'being annoying' })).toEqual('{"name":"chet","occupation":"being annoying"}');
  });
});
