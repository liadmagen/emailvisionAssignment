define([
    'chaplin',
    'models/base/model'
], function(Chaplin, Model) {
    'use strict';

    var MainPage = Model.extend({
        autoRender: true,

        id: 'main-container',


        initialize: function(attributes, options) {
            Model.prototype.initialize.apply(this, arguments);

            // loading sub-models
            if(options) {
                for(var key in options)
                {
                    if(key.indexOf('Model') > 0) {
                        this[key] = options[key];
                        this[key].parent = this;
                        this[key].load();
                    }
                }
            }
        }
    });

    return MainPage;
});
