(function () {

  'use strict';

  require('angular');
  require('angular-route');
  require('angular-resource');
  require('angular-sanitize');

  var busApp = angular.module('busApp', ['ngRoute', 'ngResource', 'ngSanitize']);

  busApp.constant('apiUrl', 'http://localhost:3000/data');

  busApp.filter('formatVariant', function() {
    return function (input) {
      if(!input) return input;
      if(input.toLowerCase() === 'unknown') return input;
      return '<strong>' + input.substr(0, 3) + '</strong>' + input.substr(3);
    };
  });

  busApp.filter('formatStatus', function() {
    return function (input) {
      if(!input) return input;
      if(input > 300) {
        return "<span class='late'>Late</span>";
      } else if(input < 0) {
        return "<span class='early'>Early</span>";
      } else {
        return "<span class='ontime'>On Time</span>";
      }
    };
  });

  busApp.factory('Buses', function($resource, apiUrl) {
    return $resource(apiUrl);
  });

  busApp.config(function($routeProvider) {
    var resolveBuses = {
      buses: function(Buses) {
        return Buses.query().$promise;
      }
    };

    $routeProvider
      .when('/', {
        controller:'BusesController as busesCtrl',
        templateUrl:'./partials/buseslist.html',
        resolve: resolveBuses
      })
      .otherwise({ redirectTo: '/' });
  });

  busApp.controller('BusesController', function(buses, $location) {
    var busesCtrl = this;
    busesCtrl.buses = buses;
    busesCtrl.notes = {};

    busesCtrl.saveNotes = function(form) {
      console.log(busesCtrl.notes);
    };
  });

}());