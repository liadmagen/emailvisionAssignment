/*
 defines and gets the location from the user browser
 if no location was found / using IE < 9 -> using Paris location as default
 */
define([
    'chaplin',
    'models/base/model'
], function(Chaplin, Model) {
    'use strict';

    var LocationModel = Model.extend({
            defaults: {
                latitude: 48.48,
                longitude: 2.20
            },

            initialize: function () {
                Model.prototype.initialize.apply(this, arguments);

                this.load();
            },

            load: function () {
                var _this = this;

                function geoSuccess(position) {
                    var coords = position.coords;

                    _this.updateLocation({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        forceRefresh: true
                    });
                }

                function geoError() {
                    _this.trigger('error', 'Could not determine your location automatically, using Paris.');

                    _this.updateLocation({
                        latitude: 48.48,
                        longitude: 2.20,
                        forceRefresh: true
                    });
                }

                if ("geolocation" in navigator) {
                    console.log("getting location");
                    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
                } else {
                    geoError();
                }
            },

            updateLocation: function (options) {
                var latitude = options.latitude || this.get('latitude');
                var longitude = options.longitude || this.get('longitude');

                console.log(latitude);
                console.log(longitude);

                if (options.forceRefresh) {
                    this.set({
                        'latitude': latitude,
                        'longitude': longitude
                    }, {
                        silent: true
                    });
                    this.trigger('change');
                } else {
                    this.set({
                        'latitude': latitude,
                        'longitude': longitude
                    });
                }
            }
        });

    return LocationModel;

});