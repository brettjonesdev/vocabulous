chrome.contextMenus.create({
    id:"addToVocabulous",
    title: "Add to Vocabulous",
    contexts:["selection"],
    onclick: addToVocabulous
});
