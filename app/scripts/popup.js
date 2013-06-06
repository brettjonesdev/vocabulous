$(document).ready(function () {
    $(".getWords").click(getWords);
    var formEl = $("form#login");
    formEl.submit(function (event) {
        event.preventDefault();
        var request = formEl.serialize();
        register(request);
    });

    $("#getWords").click(function(){
        getWords();
    });
});