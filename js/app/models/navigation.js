define([
    'models/base/model'
], function(Model) {
    'use strict';

    var Navigation = Model.extend({
        defaults: {
            items: [
                {href: '/', title: 'Home'},
                {href: '/Weather', title: 'Weather'},
                {href: '/Movies', title: 'Movies'}
            ]
        }
    });

    return Navigation;
});