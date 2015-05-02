(function () {
  'use strict';

  angular.module('smithw.main').config(mainRoute);

  /* @ngInject */
  function mainRoute($routeProvider) {
    $routeProvider.when('/', {
      controller: 'MainCtrl',
      controllerAs: 'vm',
      templateUrl: 'pages/main/main.html'
    })
  }
})();
