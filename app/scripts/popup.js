$(document).ready(function () {
    $(".getWords").click(getWords);
    var formEl = $("form#login");
    formEl.submit(function (event) {
        event.preventDefault();
        var request = {
            email:formEl.find("#email").val(),
            password:formEl.find("#password").val()
        };
        $.post("http://localhost:3000/register",
            formEl.serialize()
        ).done(function (res) {
                console.log("Success", res);
        }).fail(function (err) {
            console.log("Error", err);
        });
    });
});