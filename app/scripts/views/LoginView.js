define(['backbone', 'marionette', 'views/base/FormView', 'models/LogInModel', 'handlebars', 'hbs!template/login'],
    function (Backbone, Marionette, FormView, LogInModel, Handlebars, template) {
        return FormView.extend({
            template:template,
            model: new LogInModel(),
            onSaveSuccess: function(model,response) {

            }
        });
    });