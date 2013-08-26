define([
    'Handlebars',
    'views/base/view',
    'text!templates/weatherJumbotron.hbs'
],
    function(Handlebars, View, template) {
        'use strict';

        var weatherJumbotron = View.extend({

            template: template,

            initialize: function () {
                Handlebars.registerHelper('round', function(num) {
                    return Math.round(num);
                })

                View.prototype.initialize.apply(this, arguments);
            },

            listen: {
                'change model': 'render'
            }

        });

        return weatherJumbotron;
    }
);