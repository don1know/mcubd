const firebaseConfig = {
    apiKey: "AIzaSyA5gs25IDoaJfCE5_tI7ulE8zossMcnnkY",
    authDomain: "jsprj-b0693.firebaseapp.com",
    databaseURL: "https://jsprj-b0693-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jsprj-b0693",
    storageBucket: "jsprj-b0693.appspot.com",
    messagingSenderId: "581883143558",
    appId: "1:581883143558:web:26fa31b2aa1b5afd19b807",
    measurementId: "G-VVQ6N17N9M"
};
firebase.initializeApp(firebaseConfig);


var fileitem, filename, percent
function getfile(e) {
    fileitem = e.target.files[0]
    filename = fileitem.name
    console.log(filename)

}

var h3 = document.getElementById('percent')
var img = document.getElementById('img')


function upload() {
    storageref = firebase.storage().ref("img/" + filename)
    uploadtusk = storageref.put(fileitem)

    uploadtusk.on("state_changed", (snapshot) => {
        console.log(snapshot)
        var percent = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        console.log(percent)
        h3.innerHTML = percent + '%'
    }, (err) => {
        console.log(err)
 
    }, () => {
        uploadtusk.snapshot.ref.getDownloadURL().then((url) => {
            console.log(url)
              img.src=url

        }).catch((err) => {
            console.log(err)
        })
    })


}











// var reader = new FileReader();
//   reader.onloadend = function (evt) {
//     var blob = new Blob([evt.target.result], { type: "image/jpeg" });

//     var storageUrl = 'noticias/imagenes/';
//     var storageRef = firebase.storage().ref(storageUrl + file.name);
//     console.warn(file);
//     var uploadTask = storageRef.put(blob);

//   }

//   reader.onerror = function (e) {
//       console.log("Failed file read: " + e.toString());
//   };
//   reader.readAsArrayBuffer(file);