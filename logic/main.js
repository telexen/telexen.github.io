function loadContent(path) {
    console.log("importing: " , path);
    fetch(path)
        .then(response => response.text())
        .then(text => document.getElementsByClassName('content').innerHTML = text)
        .catch(error => console.log(error));
}

function loadHtml(event, address, targetID){
    event.stopPropagation()
    console.log("importing" + address);
    fetch(address)
    .then(response=>response.text())
    .then(text=>document.getElementById(targetID).innerHTML = text);
}