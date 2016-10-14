var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var dnaToRnaMap = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
  
  return dna.split('').map(function(nucleotide) {
    return dnaToRnaMap[nucleotide];
  }).join('');
};

module.exports = DnaTranscriber;