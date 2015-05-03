(function () {
  'use strict';

  angular.module('smithw.details').controller('DetailsCtrl', DetailsCtrl);

  /* @ngInject */
  function DetailsCtrl(RssFeedFactory, $routeParams) {
    /*jshunt validthis: true */
    var vm = this;

    init();

    function init() {
      RssFeedFactory.getDetails($routeParams.category, $routeParams.id).then(function (response) {
        vm.item = response;
        //find the biggest image to use in the header
        vm.imgIndex = 0;
        var currentMax = 0;
        for(var i = 0; i < vm.item['im:image'].length; i ++){
          if (parseInt(vm.item['im:image'][i].attributes.height) > currentMax){
            vm.imgIndex = i;
          }
        }

        //because movies like to store links in array for preview and others do not
        vm.link;
        if (angular.isArray(vm.item.link)){
          vm.link = vm.item.link[0];
        } else {
          vm.link = vm.item.link;
        }
      }, function (errorResponse) {

      });
    }
  }
})();
