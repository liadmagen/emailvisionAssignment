define([
    'jquery',
    'models/base/model',
    'app-config'
], function ($, Model, appConfig) {
    'use strict';

    var Movie = Model.extend({
        defaults: {
            options: {
                page_limit: 30,
                page: 1,
                q: '',
                callback: '?'
            }
        },

        urlRoot: function () {
            return "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=" + appConfig.ROTTENTOMATOES_API_KEY;
        },

        url: function () {
            var options = decodeURIComponent($.param(this.get("options")));
            return this.urlRoot() + '&' + options;
        },

        initialize: function (options) {
            var opts = this.get("options");
            opts.q = options.q;
            opts.page = options.page || 1;
            this.set("options", opts);

            Model.prototype.initialize.call(this, options);
        }

    });

    return Movie;
});