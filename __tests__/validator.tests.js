const Validator = require('../lib/Validator');

describe('Validator', () => {
  let validator;

  describe('all fields required', () => {
    beforeAll(() => {
      validator = new Validator('age', {
        type: Number,
        required: true
      });
    });

    it('returns the field', () => {
      const cat = {
        name: 'whiskey',
        age: 18,
        color: 'grey'
      };

      expect(validator.validate(cat)).toEqual(18);
    });
    
    it('returns the field cast to type', () => {
      const cat = {
        name: 'whiskey',
        age: '18',
        color: 'grey'
      };

      expect(validator.validate(cat)).toEqual(18);
    });
    it('returns the field', () => {
      const cat = {
        name: 'whiskey',
        weight: '20 lbs'
      };
  
      expect(() => validator.validate(cat)).toThrowErrorMatchingSnapshot();
    });
  });
  describe('optional fields', () => {
    beforeAll(() => {
      validator = new Validator('age', {
        type: Number,

      });
    });
    
    it('returns the field', () => {
      const cat = {
        name: 'whiskey',
        age: 18,
        color: 'grey'
      };
    
      expect(validator.validate(cat)).toEqual(18);
    });
        
    it('returns the field cast to type', () => {
      const cat = {
        name: 'whiskey',
        age: '18',
        color: 'grey'
      };
    
      expect(validator.validate(cat)).toEqual(18);
    });
    it('returns the field', () => {
      const cat = {
        name: 'whiskey',
        weight: '20 lbs'
      };
      
      expect(validator.validate(cat)).toBeNull();
    });
  });

});
