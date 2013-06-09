requirejs.config(REQUIRE_CONFIG);

require(["app", "underscore"],
    function (App, _) {
        alert(typeof _);
        App.start();

        chrome.contextMenus.create({
            id:"addToVocabulous",
            title:"Add to Vocabulous",
            contexts:["selection"],
            onclick:App.addToVocabulous
        });
    });