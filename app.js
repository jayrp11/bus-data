var busApp = angular.module('busApp', ['ngRoute', 'ngResource']);

busApp.factory('Buses', function($resource) {
  return $resource('http://localhost:3000/data');
});

busApp.config(function($routeProvider) {
  var resolveBuses = {
    buses: function(Buses) {
      return Buses.query().$promise;
    }
  }

  $routeProvider
    .when('/', {
      controller:'BusesController as busesCtrl',
      templateUrl:'buseslist.html',
      resolve: resolveBuses
    })
    .otherwise({ redirectTo: '/' })
});

busApp.controller('BusesController', function(buses, $location) {
  var busesCtrl = this;
  busesCtrl.buses = buses;
});
