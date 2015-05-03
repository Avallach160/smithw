(function () {
  'use strict';

  angular.module('smithw.core').factory('RssFeedFactory', RssFeedFactory);

  /* @ngInject */
  function RssFeedFactory($resource, $q) {
    var rss;
    var service = {
      getDetails: getDetails,
      getList: getList
    };
    return service;

    ////////////////

    function getDetails(category, id){
      if (rss == undefined){
        buildRssResource(category);
      }

      var d = $q.defer();

      rss.get({type: actualMediaType(category)}, function(e){
        d.resolve(_.find(e.feed.entry, function(entry){
         return entry.id.attributes['im:id'] === id;
        }));
      });

      return d.promise;
    }

    function getList(category) {
      if (rss == undefined){
        buildRssResource(category);
      }

      var d = $q.defer();

      rss.get({type: actualMediaType(category)}, function(e){
        d.resolve(e.feed.entry);
      });

      return d.promise;
    }

    //since the actual media type is a different string, keep it simple within the app
    function actualMediaType(category){
      if (category === 'movies'){
        return 'topmovies';
      } else if (category === 'books'){
        return 'topfreeebooks';
      } else {
        return 'toppodcasts';
      }
    }

    function buildRssResource(category){
      //construct the resource for later use
      rss = $resource('https://itunes.apple.com/us/rss/:type/limit=50/json', {type: actualMediaType(category)});
    }
  }
})();
