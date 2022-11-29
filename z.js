var xhttp = new XMLHttpRequest();
xhttp.open("GET", 'https://nodebd.vercel.app/', true);


xhttp.onload = function () {
    const obj = JSON.parse(this.responseText);
    if (this.responseText == '[]') { document.getElementById("h1").innerHTML = 'nai' } else {
        var node = document.createElement('li')
        var h5 = document.createElement('h5')
        h5.textContent = obj[0].num
        node.textContent = obj[0].date + '-----' + obj[0].name + '-----' + obj[0].ipad + '--'
        node.appendChild(h5);
        messages.appendChild(node);

        // setTimeout(() => {his5()}, 1000);
    }
}
xhttp.send();