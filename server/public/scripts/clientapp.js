var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/wolverine', {
      templateUrl: '/views/wolverine.html',
      controller: "WolverineController"
    })
    .when('/link', {
      templateUrl: '/views/link.html',
      controller: "LinkController"
    })
    .when('/bilbo', {
      templateUrl: '/views/bilbo.html',
      controller: "BilboController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
