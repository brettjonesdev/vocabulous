define(["underscore","jquery"], function(_,$) {
    var Util = {
        setAuthorization: function(token) {
            $.ajaxSetup({
                headers: {"Authorization": "Basic " + token}
            });
        },
        getUserToken: function() {
            console.log("get user token from cookie");
        },
        setUserToken: function(token) {
            console.log("Setting token", token);
        }
    };
    return Util;
});