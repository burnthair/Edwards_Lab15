var app = angular.module('madModule');

app.controller('resultCtrl', function($scope, madService) {
  $scope.filledInBlanks = madService.getWords();
});
