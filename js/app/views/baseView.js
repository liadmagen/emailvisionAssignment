define([
    'jquery',
    'underscore',
    'backbone',
    'Handlebars'
],
    function ($, _, Backbone, Handlebars) {
        'use strict';

        var BaseView = Backbone.View.extend({

            renderNested: function( view, selector ) {
                var $element = ( selector instanceof $ ) ? selector : this.$el.find( selector );
                view.setElement( $element ).render();
            },

            showError: function (e, msg) {
                this.$el.html('<p class="error">' + msg + '</p>');
            }

        });

        return BaseView;
    }
);