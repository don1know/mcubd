

function ll(){

    var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", 'https://nodebd.vercel.app/ndata', true);
    // xhttp.open("POST", 'http://localhost:8000/ndata', true);

    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({a:'aa',b:'bb'}));
}