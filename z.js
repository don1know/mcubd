var obj={num:66}


var xhttp2 = new XMLHttpRequest();
xhttp2.open("GET", 'https://nodebd.vercel.app/his', true);
xhttp2.setRequestHeader('n', obj.num- 1)
xhttp2.send()
xhttp2.onload = function () {

    console.log(this.responseText)
}
