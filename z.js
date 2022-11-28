

function ll(){

var xhttp = new XMLHttpRequest();
xhttp.open("POST", "http://localhost:8000/ndata", true);
// xhttp.setRequestHeader('reqs', fname + '--' + msg)
xhttp.send(document.getElementById('text').value);
}