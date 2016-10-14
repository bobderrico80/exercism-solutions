var Pangram = function(sentence) {
  this.sentence = sentence;
};

var ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

Pangram.prototype.isPangram = function() {
  if (!this.sentence) {
    return false;
  }
  
  var sentence = this.sentence.toLowerCase().replace(/[^a-z]/g, '').split('');
  return ALPHABET.filter(function(letter) {
    return sentence.indexOf(letter) < 0;
  }).length === 0;
};

module.exports = Pangram;