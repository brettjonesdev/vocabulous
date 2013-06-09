define(['backbone', 'marionette', 'service', 'jquery', 'underscore', 'util'],
    function (Backbone, Marionette, Service, $, _, util) {
        var App = new Backbone.Marionette.Application();

        App.addToVocabulous = function (onClickData) {
            console.log("Adding to vocabulous: " + onClickData.selectionText);
            Service.addToVocabulous(onClickData.selectionText.trim(), this.showDefinition);
        };

        App.showDefinition = function (definition) {
            alert("Definition: " + definition);
        };

        return App;
    });
