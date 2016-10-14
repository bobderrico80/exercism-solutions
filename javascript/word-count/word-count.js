var Words = function() {};

Words.prototype.count = function(string) {
  var words = string.trim().toLowerCase().split(/\s+/);
  return words.reduce(function(allWords, word) {
    allWords[word] = allWords.hasOwnProperty(word) ? allWords[word] + 1 : 1;
    return allWords;
  }, {});
};

module.exports = Words;