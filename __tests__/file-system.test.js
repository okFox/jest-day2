const {
  writeJSON,
  writeJSONFile
} = require('../lib/file-system');

const fs = require('fs').promises;

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve()),
    writeFile: jest.fn(() => Promise.resolve()),
  }
})
);

describe('stringify works', () => {
  it('properly stringifys to JSON', () => {
    expect(writeJSON({ name: 'chet', occupation: 'being annoying' })).toEqual('{"name":"chet","occupation":"being annoying"}');
  });
});

describe('writeJSONFile', () => {
  it('writes stringified object to correct path', () => {
    return writeJSONFile('path', {})
      .then(() => expect(fs.writeFile).toHaveBeenCalledWith('path', '{}'));
  });
});


