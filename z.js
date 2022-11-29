var xhttp2 = new XMLHttpRequest();
xhttp2.open("GET", 'https://nodebd.vercel.app/his', true);
xhttp2.setRequestHeader('n', 8 - 1)
xhttp2.send()
xhttp.onload = function () {

    console.log(this.responseText)
}
