define(["jquery"], function($) {
    var SERVICE_ENDPOINT = "http://localhost:3000";
    var Service = {
        addToVocabulous: function(word) {
            console.log(word);
        },
        getWords: function(callback) {
            $.get(SERVICE_ENDPOINT + "/allWords", {
                success: function(result) {
                    console.log(result);
                    if ( callback && typeof callback === 'function') {
                        callback(result);
                    }
                },
                error: function(err) {
                    alert(err);
                }
            });
        },
        register: function(req, callback) {
            $.post(SERVICE_ENDPOINT + "/register",
                req
            ).done(function (res) {
                console.log("Success", res);
                util.setAuthorization(res.token);
                if ( callback && typeof callback === 'function') {
                    callback(res);
                }
            }).fail(function (err) {
                console.log("Error", err);
            });
        }
    } ;
});