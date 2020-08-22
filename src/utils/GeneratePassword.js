import generator from 'generate-password';

var password = generator.generate({
  length: 10,
  numbers: true,
});

module.exports = {password};
