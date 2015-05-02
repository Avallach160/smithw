(function () {
  'use strict';

  angular.module('smithw.rssFeedList').directive('rssFeedList', rssFeedList);

  /* @ngInject */
  function rssFeedList() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      restrict: 'EA',
      controller: 'RssFeedListCtrl',
      controllerAs: 'vm',
      templateUrl: 'components/rssFeedList/rssFeedList.html',
      bindToController: true,
      scope: {
        top50: '='
      }
    };
    return directive;
  }
})();
