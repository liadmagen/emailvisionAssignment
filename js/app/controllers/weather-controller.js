define([
    'controllers/base/controller',
    'models/weather',
    'views/weatherPage'

], function (Controller, weatherModel, weatherView) {
    'use strict';

    var WeatherController = Controller.extend({

        index: function (params) {
            var _this = this;

            this.model = new weatherModel();

            this.view = new weatherView({
                model: this.model,
                region: 'main'
            });

            this.model.fetch().then(function(){
                _this.view.render();
            });
        }
    });

    return WeatherController;
});