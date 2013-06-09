requirejs.config(REQUIRE_CONFIG);

require(["app", "backbone", "marionette", "views/LoadingView"],
    function (App, Backbone, Marionette, LoadingView) {
        console.log("Starting Popup");
        App.addRegions({
            mainRegion:"#content"
        });
        App.mainRegion.show(new LoadingView());
    });