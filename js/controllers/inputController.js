var app = angular.module('madModule');

app.controller('inputCtrl', function($scope, madService, $location) {
  $scope.submitWordSet = function(wordSet) {
    madService.setWords(wordSet);
    $location.path('/resultView');
  }
});
