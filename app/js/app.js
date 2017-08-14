var app = angular.module("moneyValue", ['ui.router']);

app.config(function($stateProvider){

  // Routes
    $stateProvider
    .state('cash_flow', {
      url:'/cash-flow',
      templateUrl: './partials/cash_flow.html',
      controller: 'cashFlow'
    })
    .state('cash_flow.des_cash', {
      url:'/info-cash-flow',
      templateUrl: './partials/des_cash.html'
    })
    .state('future', {
      url:'/future',
      templateUrl: './partials/future.html',
      controller: 'future'
    })
    .state('future.des_future', {
      url: '/info-future',
      templateUrl: './partials/des_future'
    })
    .state('present', {
      url: '/present',
      templateUrl: './partials/present',
      controller: 'present'
    })
    .state('present.des_present', {
      url: '/info-present',
      templateUrl: './partials/des_present'
    })
    .state('double', {
      url:'/double',
      templateUrl: './partials/double',
      controller: 'timeTilDouble'
    })
    .state('double.des_double', {
      url: '/info-double',
      templateUrl: './partials/des_double'
    })
    .state('gain_loss', {
      url:'/gain-loss',
      templateUrl: './partials/gain_loss',
      controller: 'gainLoss'
    })
    .state('gain_loss.des_gain', {
      url:'/info-gain',
      templateUrl: './partials/des_gain'
    })
    .state('inflation_return', {
      url:'/inflation-return',
      templateUrl: './partials/inflation_return',
      controller: 'inflationAdjReturn'
    })
    .state('inflation_return.des_inflation', {
      url:'/info-inflation',
      templateUrl: './partials/des_inflation'
    })
    .state('home', {
      url:'/',
      templateUrl: './partials/welcome'
    });


});
