define([
    "chaplin",
    "views/layout",
    "models/location"
],
    function (Chaplin, Layout, Location) {
        "use strict";

        var MainApp = Chaplin.Application.extend({

            title: 'emailvision: Weather and movies',

            initialize: function (options) {
                Chaplin.Application.prototype.initialize.call(this, options);
                this.initControllers();
            },

            initLayout: function () {
                this.layout = new Layout();
            },

            initControllers: function () {

            },

            initMediator: function () {
                Chaplin.mediator.location = new Location();
            }
        });

        return MainApp;
    });