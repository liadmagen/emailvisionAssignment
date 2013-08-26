define([
    'controllers/base/controller',
    'views/mainPage',
    'models/weather',
    'views/weatherJumotron'

], function (Controller, MainPageView, weatherModel, weatherView) {
    'use strict';

    var MainPageController = Controller.extend({

        beforeAction: function () {
            Controller.prototype.beforeAction();
            this.compose('mainPage', MainPageView, {region: 'main'});
        },

        index: function (params) {
            var _this = this;
            this.model = new weatherModel();

            this.view = new weatherView({
                model: this.model,
                region: 'jumbotron'
            });

            this.model.fetch().then(function(){
               _this.view.render();
            });
        }
    });

    return MainPageController;
});