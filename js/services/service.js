var app = angular.module('madModule');

app.service('madService', function() {

  var words = {};

  this.getWords = function() {
    return words;
  };
  this.setWords = function(wordSet) {
    words = wordSet;
  };

});
