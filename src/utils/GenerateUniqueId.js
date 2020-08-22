var randomstring = require('randomstring');

function generateId() {
  let id = randomstring.generate({
    length: 12,
    charset: 'alphabetic',
  });
  return id;
}

module.exports = {generateId};
