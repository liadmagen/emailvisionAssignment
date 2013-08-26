define([
    'chaplin',
    'models/base/model',
    'app-config'
], function(Chaplin, Model, appConfig) {
    'use strict';

    var Weather = Model.extend({
        defaults: {
            options: {
                units: "si",
                callback: "?"
            }
        },

        urlRoot: function () {
            return "https://api.forecast.io/forecast/" + appConfig.FORECAST_API_KEY;
        },

        url: function () {
            var options = decodeURIComponent($.param(this.get("options")));
            var location = Chaplin.mediator.location;
            return this.urlRoot() + '/' + location.get('latitude') + ',' + location.get('longitude') + '?' + options;
        },

        initialize: function (options) {
            Model.prototype.initialize.call(this, options);
        }

    });

    return Weather;
});
