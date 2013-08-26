define(['chaplin', 'views/site-view', 'views/navBar'], function(Chaplin, SiteView, navBar) {
  'use strict';

  var Controller = Chaplin.Controller.extend({

    beforeAction: function() {
        this.compose('site', SiteView);
        this.compose('navBar', navBar, {region: 'navBar'});
    }

  });

  return Controller;
});
