define([
    'controllers/base/controller',
    'models/navigation',
    'views/navBar'
], function (Controller, NavigationModel, NavigationView) {
    'use strict';

    var NavigationController = Controller.extend({
        initialize: function() {
            Controller.prototype.initialize.apply(this, arguments);

            this.navigationModel = new NavigationModel();
            this.view = new NavigationView({model: this.navigationModel, id: '#navBar'});
        }
    });

    return NavigationController;
});