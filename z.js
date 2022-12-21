function saveFile(url) {
    // Get file name from url.
    var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
      a.download = filename; // Set the file name.
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      delete a;
    };
    xhr.open('GET', url);
    xhr.send();
  }
  saveFile('https://www.mypornhere.com/get_file/4/a205e494f3efd7942da13055a5c0fe1cf7d2a09d49/11000/11101/11101.mp4/?br=469&rnd=1671564048045')