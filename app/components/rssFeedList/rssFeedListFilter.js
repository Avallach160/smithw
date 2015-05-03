(function(){
  'use strict';

  angular.module('smithw.rssFeedList').filter('search' , search);

  /* @ngInject */
  function search(){
    return function(source, query){
      if (query === undefined || query === null || query === ''){
        return source;
      }

      //probably a bit heavy of a filter but ignores case sensitivity
      return _.filter(source, function(i){
        var title = angular.lowercase(i.title.label);
        var summary = angular.lowercase(i.summary.label);

        return title.indexOf(query) > -1 || summary.indexOf(query) > -1;
      });
    }
  }
})();
