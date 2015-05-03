(function () {
  'use strict';

  angular.module('smithw.main').controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl(tmixCaching) {
    /*jshunt validthis: true */
    var vm = this;
    vm.selectTop50 = selectTop50;

    var cacheName = 'selectedCategory';

    init();

    function init() {
      //check cache for when the user hits back after viewing details
      if (tmixCaching.isValid(cacheName)){
        selectTop50(tmixCaching.get(cacheName));
      }
    }

    function selectTop50(toDisplay){
      tmixCaching.put(cacheName, toDisplay);
      vm.active = toDisplay;
    }
  }
})();
