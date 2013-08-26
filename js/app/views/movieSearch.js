define([
    'chaplin',
    'Handlebars',
    'views/base/view',
    'text!templates/movieSearchResult.hbs'
],
    function (Chaplin, Handlebars, View, template) {
        'use strict';

        var MovieSearchView = View.extend({

            template: template,

            initialize: function () {
                Handlebars.registerHelper("newRow", function(index_count, mod, block) {

                    if(parseInt(index_count)%(mod) === 0){
                        return block.fn(this);}
                });

                Handlebars.registerHelper("closeRow", function(index_count, mod, block) {

                    if((parseInt(index_count)+1)%(mod) === 0){
                        return block.fn(this);}
                });

                Handlebars.registerHelper("resultStart", function(page, page_total) {

                    return (page-1)*page_total;
                });

                View.prototype.initialize.apply(this, arguments);
            },

            listen: {
                'change model': 'render'
            }

        });

        return MovieSearchView;
    }
);