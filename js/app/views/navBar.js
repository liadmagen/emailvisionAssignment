define([
    'chaplin',
    'views/base/view',
    'text!templates/navBar.hbs'
], function(Chaplin, View, template, router) {
    'use strict';

        var navBarView = View.extend({

            autoRender: true,
            template: template,

            initialize: function () {
                View.prototype.initialize.apply(this, arguments);
                this.subscribeEvent('startupController', this.render)
            },

            events: {
                'submit .navbar-form': 'searchMovie'
                //,'click #li_Home': 'navigateHome'
                //,'click #li_Weather': 'navigateWeather'
            },

            searchMovie: function (e) {
                e.preventDefault();

                var searchData = $('.navbar-form input[name=q]').val();
                this.publishEvent('!router:route', '@:Search/:'+searchData + '/p:1');
            },

            navigateHome: function (e) {
                e.preventDefault();
                this.publishEvent('!router:route', "Home");
            },

            navigateWeather: function (e) {
                e.preventDefault();
                this.publishEvent('!router:route', {controller: 'weather', action: 'index'});
            }

        });

        return navBarView;
    }
);