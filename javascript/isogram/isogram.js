var Isogram = function(word) {
  this.word = word;
};

Isogram.prototype.isIsogram = function() {
  var letterCount = {};
  var letters = this.word.toLowerCase().replace(/[\s-]/g, '').split('');
  
  return letters.every(function(letter) {
    if (!letterCount.hasOwnProperty(letter)) {
      letterCount[letter] = 1;
      return true;
    }
    return false;
  });
};

module.exports = Isogram;