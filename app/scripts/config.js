var REQUIRE_CONFIG = {
    baseUrl:"scripts",
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths:{
        // Core Libraries
        "jquery":"libs/jquery",
        "underscore":"libs/underscore",
        "backbone":"libs/backbone",
        "marionette":"libs/backbone.marionette",
        "handlebars":"libs/handlebars",
        "moment":"libs/moment.min",
        "alertify":"libs/alertify.min",

        //HBS required dependencies
        "hbs":"libs/hbs",
        "i18nprecompile":"libs/i18nprecompile",
        "json2":"libs/json2",

        // Plugins
        "backbone-validateAll":"libs/backbone.validateAll",
        "backbone-validation":"libs/backbone.validation",
        "backbone-deep-model":"libs/deep-model",
        "bootstrap":"libs/bootstrap"
    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim:{
        "bootstrap":["jquery"],
        "backbone":{
            "deps":["underscore"],
            // Exports the global window.Backbone object
            "exports":"Backbone"
        },
        "marionette":{
            "deps":["underscore", "backbone", "jquery"],
            // Exports the global window.Marionette object
            "exports":"Marionette"
        },
        "backbone-validateAll":["backbone"],
        "backbone-deep-model":["backbone"],
        "backbone-validation":["backbone", "backbone-validateAll"],
        "handlebars":{
            "exports":"Handlebars"
        },
        "underscore":{"exports":"_"}
    },
    hbs: {
        templateExtension: "html"
    }
};

