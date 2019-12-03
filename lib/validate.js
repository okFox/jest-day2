const nameValidator = new Validator('name', {
  type: String,
  required: true
});

const ageValidator = new Validator('age', {
  type: Number,
  required: true
});

const colorValidator = new Validator('color', {
  type: String,
  required: true
});

const cat = {
  name: 'whiskey',
  age: 18,
  color: 'grey'
};


module.exports = {
  nameValidator,
  ageValidator,
  colorValidator
};
// nameValidator.validate(cat);
// ageValidator.validate(cat);
// weightValidator.validate(cat);
