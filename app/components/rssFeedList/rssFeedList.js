(function () {
  'use strict';

  angular.module('smithw.rssFeedList').controller('RssFeedListCtrl', RssFeedListCtrl);

  /* @ngInject */
  function RssFeedListCtrl($scope, RssFeedFactory, $location) {
    /*jshunt validthis: true */
    var vm = this;
    vm.getDetails = getDetails;

    init();

    function init() {
      loadList();
    }

    function getDetails(item){
      console.log(item);
    }

    function loadList(){
      if (vm.top50 !== undefined){
        RssFeedFactory.getList(vm.top50).then(function (response) {
          vm.top50Results = response;
        }, function (errorResponse) {
          console.log('error', errorResponse);
        });
      }
    }

    $scope.$watch('vm.top50', function (newValue, oldValue) {
      loadList();
    });
  }
})();
