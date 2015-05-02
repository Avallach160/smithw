(function () {
  'use strict';

  angular.module('smithw.core').factory('RssFeedFactory', RssFeedFactory);

  /* @ngInject */
  function RssFeedFactory($resource, $q) {
    var rss;
    var service = {
      getList: getList
    };
    return service;

    ////////////////

    function getList(toGet) {
      if (rss == undefined){
        buildRssResource(toGet);
      }

      var d = $q.defer();

      rss.get({type: actualMediaType(toGet)}, function(e){
        d.resolve(e.feed.entry);
      });

      return d.promise;
    }

    //since the actual media type is a different string, keep it simple within the app
    function actualMediaType(type){
      if (type === 'movies'){
        return 'topmovies';
      } else if (type === 'books'){
        return 'topfreeebooks';
      } else {
        return 'toppodcasts';
      }
    }

    function buildRssResource(toGet){
      //construct the resource for later use
      rss = $resource('https://itunes.apple.com/us/rss/:type/limit=50/json', {type: actualMediaType(toGet)});
    }
  }
})();
