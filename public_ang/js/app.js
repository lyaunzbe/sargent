'use strict';


// Declare app level module which depends on filters, and services
angular.module('sargent', ['sargent.filters', 'sargent.services', 'sargent.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
  }]);
