(function(){
  'use strict';
  //would normally use the route helper from john papa's style guide but this is quick and dirty
  angular.module('smithw.config').config(defaultRoute);

  /* @ngInject */
  function defaultRoute($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }
})();
