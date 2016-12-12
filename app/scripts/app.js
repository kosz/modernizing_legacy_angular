'use strict';

/**
 * @ngdoc overview
 * @name legacyApp
 * @description
 * # legacyApp
 *
 * Main module of the application.
 */
angular
  .module('ts-hack', [
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
