define([
    'chaplin',
    'Handlebars',
    'views/base/view',
    'text!templates/weatherPage.hbs',
    'lib/utils'
],
    function (Chaplin, Handlebars, View, template, Utils) {
        'use strict';

        var WeatherPageView = View.extend({

            template: template,

            initialize: function () {
                Handlebars.registerHelper('round', function(temperature) {
                    return Math.round(temperature)
                });

                Handlebars.registerHelper('dateConverter', Utils.dateConverter);

                Handlebars.registerHelper("newRow", function(index_count, mod, block) {

                    if(parseInt(index_count)%(mod) === 0){
                        return block.fn(this);}
                });

                Handlebars.registerHelper("closeRow", function(index_count, mod, block) {

                    if((parseInt(index_count)+1)%(mod) === 0){
                        return block.fn(this);}
                });


                View.prototype.initialize.apply(this, arguments);
            },

            listen: {
                'change model': 'render'
            }

        });

        return WeatherPageView;
    }
);