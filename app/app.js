(function() {
  'use strict';


  /**
   * @ngdoc overview
   * @name smithwApp
   * @description
   * # smithwApp
   *
   * Main module of the application.
   */
  angular
    .module('smithwApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'smithw.config',
      'smithw.main'
    ]);
})();
