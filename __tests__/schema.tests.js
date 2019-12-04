const Schema = require('../lib/Schema');

describe('Schema', () => {
  it('validates a good schema', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number
      },
      color: {
        type: String
      }
    });

    const cat = {
      name: 'whiskey',
      age: 18,
      color: 'grey'
    };

    expect(schema.validate(cat)).toEqual({
      name: 'whiskey',
      age: 18,
      color: 'grey'
    });
  });

  it('throws on a bad schema', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number
      },
      color: {
        type: String
      }
    });

    const cat = {
      age: 'eighteen',
      weight: '20 lbs'
    };

    expect(() => schema.validate(cat)).toThrowErrorMatchingSnapshot();
  });
});