var SERVICE_ENDPOINT="http://localhost:3000";

function addToVocabulous(onClickData) {
    alert(onClickData.selectionText);
}

function getWords() {
    $.get(SERVICE_ENDPOINT + "/allWords", {
        success: function(result) {
            alert(result);
        },
        error: function(err) {
            alert(err);
        }
    })
}

function register() {

}