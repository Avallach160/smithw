(function () {
  'use strict';

  angular.module('smithw.main').controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl() {
    /*jshunt validthis: true */
    var vm = this;
    vm.selectTop50 = selectTop50;

    init();

    function init() {
      vm.active = 'movies';
    }

    function selectTop50(toDisplay){
      vm.active = toDisplay;
    }
  }
})();
