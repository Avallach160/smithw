(function () {
  'use strict';

  angular.module('smithw.details').config(route);

  /* @ngInject */
  function route($routeProvider) {
    $routeProvider.when('/details/:category/:id', {
      controller: 'DetailsCtrl',
      controllerAs: 'vm',
      templateUrl: 'pages/details/details.html'
    })
  }
})();
