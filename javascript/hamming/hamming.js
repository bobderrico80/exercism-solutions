var Hamming = function() {};

Hamming.prototype.compute = function(strand1, strand2) {
  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.');
  }
  
  if (strand1 === strand2) {
    return 0;
  }
  
  var length = strand1.length;
  var distance = 0;
  
  for (var i = 0; i < length; i++) {
    distance += strand1.charAt(i) !== strand2.charAt(i) ? 1 : 0;
  }
  
  return distance;
};

module.exports = Hamming;