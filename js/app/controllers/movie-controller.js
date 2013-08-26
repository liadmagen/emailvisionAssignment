define([
    'controllers/base/controller',
    'models/movie',
    'views/movieSearch'

], function (Controller, MovieModel, MovieSearchView) {
    'use strict';

    var MovieController = Controller.extend({

        search: function (params) {
            var _this = this;

            if(!"page" in params) {
                params.page = 1;
            }
            else {
                params.page = parseInt(params.page.substr(1));
            }

            this.model = new MovieModel({
                q: params.query.substr(1),
                page: params.page
            });

            this.view = new MovieSearchView({
                model: this.model,
                region: 'main'
            });

            this.model.fetch().then(function(){
               _this.view.render();
            });
        }
    });

    return MovieController;
});