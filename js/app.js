/**
 * User: Liad
 * Date: 25/08/13
 * Time: 11:19
 */

requirejs.config({
    baseUrl: './js/app',

    paths: {
        "templates": 'templates',
        "jquery": "../lib/jquery-1.10.2.min",
        "jquery.bootstrap": "../lib/bootstrap.min",
        "backbone": "../lib/backbone",
        "underscore": "../lib/underscore",
        "Handlebars": "../lib/handlebars",
        "text": "../lib/text",
        "chaplin": "../lib/chaplin"
    },

    shim: {
        "jquery.bootstrap": {
            deps: ["jquery"]
        },
        "backbone": {
            deps: ['underscore', 'jquery', 'jquery.bootstrap'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'Handlebars': {
            exports: 'Handlebars'
        }
    }

    //debug
    //,urlArgs: 'bust=' +  (new Date()).getTime()
});

requirejs(["main", "routes"],
    function (Main, routes) {
        var app = new Main({routes: routes, controllerSuffix: '-controller', root: '/emailvision/'   }); //
    }
);