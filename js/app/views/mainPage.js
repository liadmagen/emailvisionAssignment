define([
    'views/base/view',
    'text!templates/main.hbs'
], function(View, template) {
    'use strict';

    var MainPageView = View.extend({
        // Automatically render after initialize
        autoRender: true,

        id: 'main-container',

        regions: {
            jumbotron: "#jumbotronContainer",
            col1: '#col1',
            col2: '#col2',
            col3: '#col3'
        },

        // Save the template string in a prototype property.
        // This is overwritten with the compiled template function.
        // In the end you might want to used precompiled templates.
        template: template
    });

    return MainPageView;
});
