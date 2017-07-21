var app = angular.module('madModule');

app.config(function($routeProvider) {
  $routeProvider
    .when('/inputView', {
      controller: 'inputCtrl',
      templateUrl: './partials/inputView.html'
    })
    .when('/resultView', {
      controller: 'resultCtrl',
      templateUrl: '././partials/resultView.html'
    })
    .otherwise({ redirectTo: '/inputView' });
});
