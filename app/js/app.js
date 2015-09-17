var app = angular.module("moneyValue", ['ngRoute', 'ngAnimate'])

app.config([
  '$routeProvider',
  function($routeProvider){
    // $locationProvider.hashPrefix('!');
  // Routes
    $routeProvider
    .when('/cash_flow', {
      templateUrl: './partials/cash_flow.html',
      controller: 'cashFlow'
    })
    .when('/future', {
      templateUrl: './partials/future.html',
      controller: 'future'
    })
    .when('/double', {
      templateUrl: './partials/double.html',
      controller: 'timeTilDouble'
    })
    .when('/gain_loss', {
      templateUrl: './partials/gain_loss.html',
      controller: 'gainLoss'
    })
    .when('/inflation_return', {
      templateUrl: './partials/inflation_return.html',
      controller: 'inflationAdjReturn'
    })
    .when('/', {
      templateUrl: './partials/welcome.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
]);