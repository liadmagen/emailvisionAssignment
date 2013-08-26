define([
  'underscore',
  'chaplin'
], function(_, Chaplin) {
  'use strict'

  // Application-specific utilities
  // ------------------------------

  // Delegate to Chaplin’s utils module
  var utils = Chaplin.utils.beget(Chaplin.utils);

  // Add additional application-specific properties and methods

  // _(utils).extend({
  //   someProperty: 'foo',
  //   someMethod: function() {}
  // });

    _(utils).extend({
        timeConverter: function (UNIX_timestamp) {
            var a = new Date(UNIX_timestamp*1000);
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = date+', '+month+' '+year+' '+hour+':'+min+':'+sec ;
            return time;
        },

        dateConverter: function (UNIX_timestamp) {
            var a = new Date(UNIX_timestamp*1000);
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var time = date+', '+month+' '+year;
            return time;
        }
    })

  return utils;
});
