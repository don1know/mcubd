

function me() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'fb')
    xhttp.send();

    window.open('https://mcubd.netlify.app/contact', '_self')

}

var info
if (navigator.deviceMemory) {
    info = navigator.deviceMemory + 'gb-h' + screen.height + 'x' + screen.width
} else {
    info = screen.height + 'x' + screen.width
}

function mcus() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'seris-' + info)
    xhttp.send();
    window.open('https://mcubd.netlify.app/mcu-seris/index', '_self')

}

function mcu() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'Mcu-but-' + info)
    xhttp.send();

    window.open('https://mcubd.netlify.app', '_self')
}

function home() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'mcu-logo-' + info)
    xhttp.send();


    window.open('https://mcubd.netlify.app', '_self')
}

function mar() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'fox-' + info)
    xhttp.send();
    window.open('https://mcubd.netlify.app/marvel/index', '_self')

}

function other() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'other-' + info)
    xhttp.send();


    window.open('https://mcubd.netlify.app/others/index', '_self')
}


// imgdiv('Chhichhore (2019) [1.4GB] & 720','chi',{q720p:'',q1080p:''},{size720:'',size1080:''})

// function imgdiv(bname, bimg, q7pp,size,t1,t2) {




// function imgdiv(bname, bimg, videolink, size) {
//     var w = window.innerWidth;
//     var h = window.innerHeight;
//     var g = w * .3939


//     var chidiv = document.createElement("div");
//     var iiidiv = document.createElement("div");
//     var p = document.createElement("p");


//     p.innerText = bname



//     var image = document.createElement("img");

//     chidiv.classList.add('chi');
//     iiidiv.classList.add('iii');
//     image.src = '../logoimg/' + bimg + '.jpg'

//     iiidiv.append(image)


//     chidiv.append(iiidiv, p)
//     var con = document.getElementById('cont')
//     con.appendChild(chidiv)

//     if (h - w < 0) {
//         chidiv.style.backgroundColor = '#000000';
//         chidiv.style.padding = '0px'
//         chidiv.style.marginTop = '14px'
//         chidiv.style.float = 'left'
//         chidiv.style.height = h * .9 + 'px'
//         chidiv.style.width = g * .6 + 'px'

//         image.style.width = g * .6 + 'px'

//         iiidiv.style.height = h * .7 + 'px'
//         iiidiv.style.overflow = 'hidden'

//     }
//     else {
//         chidiv.style.backgroundColor = '#000000';
//         chidiv.style.padding = '0px'
//         chidiv.style.marginTop = '14px'
//         chidiv.style.float = 'left'
//         chidiv.style.height = h * .55 + 'px'
//         chidiv.style.width = g + 'px'

//         image.style.width = g + 'px'

//         iiidiv.style.height = h * .4 + 'px'
//         iiidiv.style.overflow = 'hidden'

//     }

//     chidiv.onclick = () => {
//         var con = document.getElementById('cont')
//         con.style.display = 'none'

//         var xhttp = new XMLHttpRequest();
//         xhttp.open("POST", 'https://nodebd.vercel.app/', true);
//         xhttp.setRequestHeader('reqs', bimg)
//         xhttp.send();


//         var q720 = document.createElement("button");
//         var q1080 = document.createElement("button");
//         var downonly = document.createElement("button");


//         q720.setAttribute('id', 'q720')
//         q1080.setAttribute('id', 'q1080')
//         downonly.setAttribute('id', 'downonly')


//         q720.innerText = '720p (' + size.size720 + ')'
//         q1080.innerText = '1080p (' + size.size1080 + ')'
//         downonly.innerText = 'Download only (' + size.sizedown + ')'


//         q1080.style.display = 'block'
//         q1080.style.width = '100%'
//         q1080.style.padding = '50px'
//         q1080.style.marginBottom = '10px'


//         q720.style.display = 'block'
//         q720.style.width = '100%'
//         q720.style.padding = '50px'
//         q720.style.marginBottom = '10px'

//         downonly.style.display = 'block'
//         downonly.style.width = '100%'
//         downonly.style.padding = '50px'
//         downonly.style.marginBottom = '10px'

//         // if(videolink.q720p==undefined || videolink.q720p=='' ){
//         //     if(videolink.q1080p==undefined || videolink.q1080p=='' ){}else{
//         //         document.body.append(q1080)
//         //     }
//         // }else{
//         //     if(videolink.q1080p==undefined || videolink.q1080p=='' ){document.body.append(q720)}else{
//         //         document.body.append(q720,q1080)
//         //     }
//         // }





//         if (videolink.q720p == undefined || videolink.q720p == '') {
//             if (videolink.q1080p == undefined || videolink.q1080p == '') {
//                 if (videolink.downonly == undefined || videolink.downonly == '') {
//                 } else { document.body.append(downonly) }
//             } else {
//                 if (videolink.downonly == undefined || videolink.downonly == '') {
//                     document.body.append(q1080)
//                 } else { document.body.append(downonly, q1080) }
//             }
//         } else {
//             if (videolink.q1080p == undefined || videolink.q1080p == '') {
//                 if (videolink.downonly == undefined || videolink.downonly == '') {
//                     document.body.append(q720)
//                 } else {
//                     document.body.append(downonly, q720)
//                 }
//             }
//             else {

//                 if (videolink.downonly == undefined || videolink.downonly == '') {
//                     document.body.append(q720, q1080)
//                 } else {
//                     document.body.append(downonly, q720, q1080)
//                 }

//             }






//         }


//         q720.onclick = () => {

//             var q720 = document.getElementById('q720')
//             if (q720 == null) { } else { q720.remove() }
//             var q1080 = document.getElementById('q1080')
//             if (q1080 == null) { } else { q1080.remove() }
//             var downonly = document.getElementById('downonly')
//             if (downonly == null) { } else { downonly.remove() }


//             var xhttp = new XMLHttpRequest();
//             xhttp.open("POST", 'https://nodebd.vercel.app/', true);
//             xhttp.setRequestHeader('reqs', bimg + '720-click')
//             xhttp.send();

//             var onli = document.createElement("button");
//             var down7 = document.createElement("button");

//             onli.setAttribute('id', 'onli')
//             down7.setAttribute('id', 'down')

//             onli.innerText = 'Watch Online'
//             down7.innerText = 'Download (' + size.size720 + ')'

//             down7.style.display = 'block'
//             down7.style.width = '100%'
//             down7.style.padding = '50px'

//             onli.style.display = 'block'
//             onli.style.width = '100%'
//             onli.style.padding = '50px'
//             onli.style.marginBottom = '10px'

//             // document.body.append(video, button)
//             document.body.append(onli, down7)




//             onli.onclick = () => {
//                 var onli = document.getElementById('onli')
//                 onli.remove()
//                 var dow = document.getElementById('down')
//                 dow.remove()


//                 var video = document.createElement("video");
//                 var source = document.createElement("source");


//                 video.setAttribute('controls', 'true')
//                 video.setAttribute('autoplay', 'true')
//                 video.setAttribute('id', 'viddd')
//                 video.setAttribute('controlsList', 'noplaybackrate nodownload ')
//                 video.setAttribute('oncontextmenu', 'return false;')

//                 source.setAttribute('id', 'srcc')


//                 video.width = w * .94
//                 video.style.marginTop = '20px'
//                 source.src = videolink.q720p

//                 video.append(source)

//                 document.body.append(video)



//                 sig(bimg, '9000', '9s')
//                 sig(bimg, '20000', '20s')
//                 sig(bimg, '40000', '40s')
//                 sig(bimg, '120000', '2m')
//                 sig(bimg, '300000', '5m')
//                 sig(bimg, '900000', '15m')
//                 sig(bimg, '1200000', '20m')
//                 sig(bimg, '1800000', '30m')
//                 sig(bimg, '2400000', '40m')
//                 sig(bimg, '3000000', '50m')
//                 sig(bimg, '3600000', '1h')
//                 sig(bimg, '4200000', '1h-10m')
//                 sig(bimg, '4800000', '1h-20m')
//                 sig(bimg, '5400000', '1h-30m')
//                 sig(bimg, '6000000', '1h-40m')
//                 sig(bimg, '6600000', '1h-50m')
//                 sig(bimg, '7200000', '2h')
//                 sig(bimg, '7500000', '2h-5m')
//                 sig(bimg, '7800000', '2h-10m')
//                 sig(bimg, '8100000', '2h-15m')
//                 sig(bimg, '8400000', '2h-20m')
//                 sig(bimg, '8700000', '2h-25m')
//                 sig(bimg, '9000000', '2h-30m')
//                 sig(bimg, '9300000', '2h-35m')
//                 sig(bimg, '9600000', '2h-40m')




//             }



//             down7.onclick = () => {
//                 var xhttp = new XMLHttpRequest();
//                 xhttp.open("POST", 'https://nodebd.vercel.app/', true);
//                 xhttp.setRequestHeader('reqs', bimg + '-720-download')
//                 xhttp.send();
//                 window.open(videolink.q720p, '_self')
//             }


//         }


//         q1080.onclick = () => {


//             var q720 = document.getElementById('q720')
//             if (q720 == null) { } else { q720.remove() }
//             var q1080 = document.getElementById('q1080')
//             if (q1080 == null) { } else { q1080.remove() }
//             var downonly = document.getElementById('downonly')
//             if (downonly == null) { } else { downonly.remove() }



//             var xhttp = new XMLHttpRequest();
//             xhttp.open("POST", 'https://nodebd.vercel.app/', true);
//             xhttp.setRequestHeader('reqs', bimg + '-1080-click')
//             xhttp.send();

//             var onli = document.createElement("button");
//             var down7 = document.createElement("button");

//             onli.setAttribute('id', 'onli')
//             down7.setAttribute('id', 'down')

//             onli.innerText = 'Watch Online'
//             down7.innerText = 'Download (' + size.size1080 + ')'

//             down7.style.display = 'block'
//             down7.style.width = '100%'
//             down7.style.padding = '50px'

//             onli.style.display = 'block'
//             onli.style.width = '100%'
//             onli.style.padding = '50px'
//             onli.style.marginBottom = '10px'

//             // document.body.append(video, button)
//             document.body.append(onli, down7)




//             onli.onclick = () => {
//                 var onli = document.getElementById('onli')
//                 onli.remove()
//                 var dow = document.getElementById('down')
//                 dow.remove()


//                 var video = document.createElement("video");
//                 var source = document.createElement("source");


//                 video.setAttribute('controls', 'true')
//                 video.setAttribute('autoplay', 'true')
//                 video.setAttribute('id', 'viddd')
//                 video.setAttribute('controlsList', 'noplaybackrate nodownload ')
//                 video.setAttribute('oncontextmenu', 'return false;')

//                 source.setAttribute('id', 'srcc')


//                 video.width = w * .94
//                 video.style.marginTop = '20px'
//                 source.src = videolink.q1080p

//                 video.append(source)

//                 document.body.append(video)



//                 sig(bimg, '9000', '9s')
//                 sig(bimg, '20000', '20s')
//                 sig(bimg, '40000', '40s')
//                 sig(bimg, '120000', '2m')
//                 sig(bimg, '300000', '5m')
//                 sig(bimg, '900000', '15m')
//                 sig(bimg, '1200000', '20m')
//                 sig(bimg, '1800000', '30m')
//                 sig(bimg, '2400000', '40m')
//                 sig(bimg, '3000000', '50m')
//                 sig(bimg, '3600000', '1h')
//                 sig(bimg, '4200000', '1h-10m')
//                 sig(bimg, '4800000', '1h-20m')
//                 sig(bimg, '5400000', '1h-30m')
//                 sig(bimg, '6000000', '1h-40m')
//                 sig(bimg, '6600000', '1h-50m')
//                 sig(bimg, '7200000', '2h')
//                 sig(bimg, '7500000', '2h-5m')
//                 sig(bimg, '7800000', '2h-10m')
//                 sig(bimg, '8100000', '2h-15m')
//                 sig(bimg, '8400000', '2h-20m')
//                 sig(bimg, '8700000', '2h-25m')
//                 sig(bimg, '9000000', '2h-30m')
//                 sig(bimg, '9300000', '2h-35m')
//                 sig(bimg, '9600000', '2h-40m')




//             }



//             down7.onclick = () => {
//                 var xhttp = new XMLHttpRequest();
//                 xhttp.open("POST", 'https://nodebd.vercel.app/', true);
//                 xhttp.setRequestHeader('reqs', bimg + '-1080-download')
//                 xhttp.send();
//                 window.open(videolink.q1080p, '_self')
//             }


//         }


//         downonly.onclick = () => {

//             var q720 = document.getElementById('q720')
//             if (q720 == null) { } else { q720.remove() }
//             var q1080 = document.getElementById('q1080')
//             if (q1080 == null) { } else { q1080.remove() }
//             var downonly = document.getElementById('downonly')
//             if (downonly == null) { } else { downonly.remove() }


//             var xhttp = new XMLHttpRequest();
//             xhttp.open("POST", 'https://nodebd.vercel.app/', true);
//             xhttp.setRequestHeader('reqs', bimg + 'downonly-click')
//             xhttp.send();

//             var down7 = document.createElement("button");

//             down7.setAttribute('id', 'down')

//             down7.innerText = 'Download (' + size.sizedownonly + ')'

//             down7.style.display = 'block'
//             down7.style.width = '100%'
//             down7.style.padding = '50px'



//             // document.body.append(video, button)
//             document.body.append(down7)



//             down7.onclick = () => {
//                 var xhttp = new XMLHttpRequest();
//                 xhttp.open("POST", 'https://nodebd.vercel.app/', true);
//                 xhttp.setRequestHeader('reqs', bimg + '-downonly-download')
//                 xhttp.send();
//                 window.open(videolink.downonly, '_self')
//             }


//         }


//     }





// }



function seris(bname, bimg, videolink, size, type) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var g = w * .3939


    var chidiv = document.createElement("div");
    var iiidiv = document.createElement("div");
    var links = document.createElement("div");
    links.innerText = JSON.stringify(videolink)
    links.classList.add('link')
    links.style.cssText = 'display:none'
    var p = document.createElement("p");
    p.innerText = bname
    var image = document.createElement("img");

    chidiv.classList.add('chi');
    iiidiv.classList.add('iii');
    image.src = '../logoimg/' + bimg + '.jpg'

    iiidiv.append(image)
    chidiv.append(iiidiv, p, links)
    var con = document.getElementById('cont')
    con.appendChild(chidiv)

    if (h - w < 0) {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .9 + 'px'
        chidiv.style.width = g * .6 + 'px'

        image.style.width = g * .6 + 'px'

        iiidiv.style.height = h * .7 + 'px'
        iiidiv.style.overflow = 'hidden'

    }
    else {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .55 + 'px'
        chidiv.style.width = g + 'px'

        image.style.width = g + 'px'

        iiidiv.style.height = h * .4 + 'px'
        iiidiv.style.overflow = 'hidden'

    }

    chidiv.onclick = () => {
        var con = document.getElementById('cont')
        con.style.display = 'none';
        document.getElementById('order').remove()
        document.getElementById('h4').remove()



        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg)
        xhttp.send();

        // ------------------------------------------




        if ('kk' == 'kk') {


            var e1 = document.createElement("button");
            var e2 = document.createElement("button");
            var e3 = document.createElement("button");
            var e4 = document.createElement("button");
            var e5 = document.createElement("button");
            var e6 = document.createElement("button");
            var e7 = document.createElement("button");
            var e8 = document.createElement("button");
            var e9 = document.createElement("button");
            var e10 = document.createElement("button");
            var e11 = document.createElement("button");
            var e12 = document.createElement("button");
            var e13 = document.createElement("button");
            var e14 = document.createElement("button");
            var e15 = document.createElement("button");
            var e16 = document.createElement("button");
            var e17 = document.createElement("button");
            var e18 = document.createElement("button");
            var e19 = document.createElement("button");
            var e20 = document.createElement("button");




            
            if (type == 'mv') { e1.innerText = size;e1.style.padding = '32px';
            e1.style.marginTop = '50%'
             } else { e1.innerText = 'Episode 1';
             e1.style.padding = '12px'}
            e2.innerText = 'Episode 2'
            e3.innerText = 'Episode 3'
            e4.innerText = 'Episode 4'
            e5.innerText = 'Episode 5'
            e6.innerText = 'Episode 6'
            e7.innerText = 'Episode 7'
            e8.innerText = 'Episode 8'
            e9.innerText = 'Episode 9'
            e10.innerText = 'Episode 10'
            e11.innerText = 'Episode 11'
            e12.innerText = 'Episode 12'
            e13.innerText = 'Episode 13'
            e14.innerText = 'Episode 14'
            e15.innerText = 'Episode 15'
            e16.innerText = 'Episode 16'
            e17.innerText = 'Episode 17'
            e18.innerText = 'Episode 18'
            e19.innerText = 'Episode 19'
            e20.innerText = 'Episode 20'






            e1.style.display = 'block'
            e2.style.display = 'block'
            e3.style.display = 'block'
            e4.style.display = 'block'
            e5.style.display = 'block'
            e6.style.display = 'block'
            e7.style.display = 'block'
            e8.style.display = 'block'
            e9.style.display = 'block'
            e10.style.display = 'block'
            e11.style.display = 'block'
            e12.style.display = 'block'
            e13.style.display = 'block'
            e14.style.display = 'block'
            e15.style.display = 'block'
            e16.style.display = 'block'
            e17.style.display = 'block'
            e18.style.display = 'block'
            e19.style.display = 'block'
            e20.style.display = 'block'



            e1.style.width = '100%'
            e2.style.width = '100%'
            e3.style.width = '100%'
            e4.style.width = '100%'
            e5.style.width = '100%'
            e6.style.width = '100%'
            e7.style.width = '100%'
            e8.style.width = '100%'
            e9.style.width = '100%'
            e10.style.width = '100%'
            e11.style.width = '100%'
            e12.style.width = '100%'
            e13.style.width = '100%'
            e14.style.width = '100%'
            e15.style.width = '100%'
            e16.style.width = '100%'
            e17.style.width = '100%'
            e18.style.width = '100%'
            e19.style.width = '100%'
            e20.style.width = '100%'



            e2.style.padding = '12px'
            e3.style.padding = '12px'
            e4.style.padding = '12px'
            e5.style.padding = '12px'
            e6.style.padding = '12px'
            e7.style.padding = '12px'
            e8.style.padding = '12px'
            e9.style.padding = '12px'
            e10.style.padding = '12px'
            e11.style.padding = '12px'
            e12.style.padding = '12px'
            e13.style.padding = '12px'
            e14.style.padding = '12px'
            e15.style.padding = '12px'
            e16.style.padding = '12px'
            e17.style.padding = '12px'
            e18.style.padding = '12px'
            e19.style.padding = '12px'
            e20.style.padding = '12px'





            e1.style.marginBottom = '10px'
            e2.style.marginBottom = '10px'
            e3.style.marginBottom = '10px'
            e4.style.marginBottom = '10px'
            e5.style.marginBottom = '10px'
            e6.style.marginBottom = '10px'
            e7.style.marginBottom = '10px'
            e8.style.marginBottom = '10px'
            e9.style.marginBottom = '10px'
            e10.style.marginBottom = '10px'
            e11.style.marginBottom = '10px'
            e12.style.marginBottom = '10px'
            e13.style.marginBottom = '10px'
            e14.style.marginBottom = '10px'
            e15.style.marginBottom = '10px'
            e16.style.marginBottom = '10px'
            e17.style.marginBottom = '10px'
            e18.style.marginBottom = '10px'
            e19.style.marginBottom = '10px'
            e20.style.marginBottom = '10px'




            var count = videolink.length


            if (count == 0) {
            } else if (count == 1) {
                document.body.append(e1)
            } else if (count == 2) {
                document.body.append(e1, e2)
            } else if (count == 3) {
                document.body.append(e1, e2, e3)
            } else if (count == 4) {
                document.body.append(e1, e2, e3, e4)
            } else if (count == 5) {
                document.body.append(e1, e2, e3, e4, e5)
            } else if (count == 6) {
                document.body.append(e1, e2, e3, e4, e5, e6)
            } else if (count == 7) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7)
            } else if (count == 8) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8)
            } else if (count == 9) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9)
            } else if (count == 10) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10)

            } else if (count == 11) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11)

            } else if (count == 12) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12)

            } else if (count == 13) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13)

            } else if (count == 14) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14)

            } else if (count == 15) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15)

            } else if (count == 16) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16)

            } else if (count == 17) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17)

            } else if (count == 18) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18)

            } else if (count == 19) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19)

            } else if (count == 20) {
                document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20)

            } else {

            }
        }



        e1.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()



            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            if (type == 'mv') { 
                onli.style.marginTop = '30%'

             } else {

             }

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[0]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-1', '9000', '9s')
                sig(bimg + '-ep-1', '20000', '20s')
                sig(bimg + '-ep-1', '40000', '40s')
                sig(bimg + '-ep-1', '120000', '2m')
                sig(bimg + '-ep-1', '300000', '5m')
                sig(bimg + '-ep-1', '900000', '15m')
                sig(bimg + '-ep-1', '1200000', '20m')
                sig(bimg + '-ep-1', '1800000', '30m')
                sig(bimg + '-ep-1', '2400000', '40m')
                sig(bimg + '-ep-1', '3000000', '50m')
                sig(bimg + '-ep-1', '3600000', '1h')
                sig(bimg + '-ep-1', '4200000', '1h-10m')
                sig(bimg + '-ep-1', '4800000', '1h-20m')
                sig(bimg + '-ep-1', '5400000', '1h-30m')
                sig(bimg + '-ep-1', '6000000', '1h-40m')
                sig(bimg + '-ep-1', '6600000', '1h-50m')
                sig(bimg + '-ep-1', '7200000', '2h')
                sig(bimg + '-ep-1', '7500000', '2h-5m')
                sig(bimg + '-ep-1', '7800000', '2h-10m')
                sig(bimg + '-ep-1', '8100000', '2h-15m')
                sig(bimg + '-ep-1', '8400000', '2h-20m')
                sig(bimg + '-ep-1', '8700000', '2h-25m')
                sig(bimg + '-ep-1', '9000000', '2h-30m')
                sig(bimg + '-ep-1', '9300000', '2h-35m')
                sig(bimg + '-ep-1', '9600000', '2h-40m')



            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-1-download')
                xhttp.send();
                window.open(videolink[0], '_self')

            }



        }
        e2.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[1]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-2', '9000', '9s')
                sig(bimg + '-ep-2', '20000', '20s')
                sig(bimg + '-ep-2', '40000', '40s')
                sig(bimg + '-ep-2', '120000', '2m')
                sig(bimg + '-ep-2', '300000', '5m')
                sig(bimg + '-ep-2', '900000', '15m')
                sig(bimg + '-ep-2', '1200000', '20m')
                sig(bimg + '-ep-2', '1800000', '30m')
                sig(bimg + '-ep-2', '2400000', '40m')
                sig(bimg + '-ep-2', '3000000', '50m')
                sig(bimg + '-ep-2', '3600000', '1h')
                sig(bimg + '-ep-2', '4200000', '1h-10m')
                sig(bimg + '-ep-2', '4800000', '1h-20m')
                sig(bimg + '-ep-2', '5400000', '1h-30m')
                sig(bimg + '-ep-2', '6000000', '1h-40m')
                sig(bimg + '-ep-2', '6600000', '1h-50m')
                sig(bimg + '-ep-2', '7200000', '2h')
                sig(bimg + '-ep-2', '7500000', '2h-5m')
                sig(bimg + '-ep-2', '7800000', '2h-10m')
                sig(bimg + '-ep-2', '8100000', '2h-15m')
                sig(bimg + '-ep-2', '8400000', '2h-20m')
                sig(bimg + '-ep-2', '8700000', '2h-25m')
                sig(bimg + '-ep-2', '9000000', '2h-30m')
                sig(bimg + '-ep-2', '9300000', '2h-35m')
                sig(bimg + '-ep-2', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-2-download')
                xhttp.send();
                window.open(videolink[1], '_self')

            }



        }
        e3.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[2]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-3', '9000', '9s')
                sig(bimg + '-ep-3', '20000', '20s')
                sig(bimg + '-ep-3', '40000', '40s')
                sig(bimg + '-ep-3', '120000', '2m')
                sig(bimg + '-ep-3', '300000', '5m')
                sig(bimg + '-ep-3', '900000', '15m')
                sig(bimg + '-ep-3', '1200000', '20m')
                sig(bimg + '-ep-3', '1800000', '30m')
                sig(bimg + '-ep-3', '2400000', '40m')
                sig(bimg + '-ep-3', '3000000', '50m')
                sig(bimg + '-ep-3', '3600000', '1h')
                sig(bimg + '-ep-3', '4200000', '1h-10m')
                sig(bimg + '-ep-3', '4800000', '1h-20m')
                sig(bimg + '-ep-3', '5400000', '1h-30m')
                sig(bimg + '-ep-3', '6000000', '1h-40m')
                sig(bimg + '-ep-3', '6600000', '1h-50m')
                sig(bimg + '-ep-3', '7200000', '2h')
                sig(bimg + '-ep-3', '7500000', '2h-5m')
                sig(bimg + '-ep-3', '7800000', '2h-10m')
                sig(bimg + '-ep-3', '8100000', '2h-15m')
                sig(bimg + '-ep-3', '8400000', '2h-20m')
                sig(bimg + '-ep-3', '8700000', '2h-25m')
                sig(bimg + '-ep-3', '9000000', '2h-30m')
                sig(bimg + '-ep-3', '9300000', '2h-35m')
                sig(bimg + '-ep-3', '9600000', '2h-40m')



            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-3-download')
                xhttp.send();
                window.open(videolink[2], '_self')

            }



        }
        e4.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[3]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-4', '9000', '9s')
                sig(bimg + '-ep-4', '20000', '20s')
                sig(bimg + '-ep-4', '40000', '40s')
                sig(bimg + '-ep-4', '120000', '2m')
                sig(bimg + '-ep-4', '300000', '5m')
                sig(bimg + '-ep-4', '900000', '15m')
                sig(bimg + '-ep-4', '1200000', '20m')
                sig(bimg + '-ep-4', '1800000', '30m')
                sig(bimg + '-ep-4', '2400000', '40m')
                sig(bimg + '-ep-4', '3000000', '50m')
                sig(bimg + '-ep-4', '3600000', '1h')
                sig(bimg + '-ep-4', '4200000', '1h-10m')
                sig(bimg + '-ep-4', '4800000', '1h-20m')
                sig(bimg + '-ep-4', '5400000', '1h-30m')
                sig(bimg + '-ep-4', '6000000', '1h-40m')
                sig(bimg + '-ep-4', '6600000', '1h-50m')
                sig(bimg + '-ep-4', '7200000', '2h')
                sig(bimg + '-ep-4', '7500000', '2h-5m')
                sig(bimg + '-ep-4', '7800000', '2h-10m')
                sig(bimg + '-ep-4', '8100000', '2h-15m')
                sig(bimg + '-ep-4', '8400000', '2h-20m')
                sig(bimg + '-ep-4', '8700000', '2h-25m')
                sig(bimg + '-ep-4', '9000000', '2h-30m')
                sig(bimg + '-ep-4', '9300000', '2h-35m')
                sig(bimg + '-ep-4', '9600000', '2h-40m')



            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-4-download')
                xhttp.send();
                window.open(videolink[3], '_self')

            }



        }
        e5.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[4]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-5', '9000', '9s')
                sig(bimg + '-ep-5', '20000', '20s')
                sig(bimg + '-ep-5', '40000', '40s')
                sig(bimg + '-ep-5', '120000', '2m')
                sig(bimg + '-ep-5', '300000', '5m')
                sig(bimg + '-ep-5', '900000', '15m')
                sig(bimg + '-ep-5', '1200000', '20m')
                sig(bimg + '-ep-5', '1800000', '30m')
                sig(bimg + '-ep-5', '2400000', '40m')
                sig(bimg + '-ep-5', '3000000', '50m')
                sig(bimg + '-ep-5', '3600000', '1h')
                sig(bimg + '-ep-5', '4200000', '1h-10m')
                sig(bimg + '-ep-5', '4800000', '1h-20m')
                sig(bimg + '-ep-5', '5400000', '1h-30m')
                sig(bimg + '-ep-5', '6000000', '1h-40m')
                sig(bimg + '-ep-5', '6600000', '1h-50m')
                sig(bimg + '-ep-5', '7200000', '2h')
                sig(bimg + '-ep-5', '7500000', '2h-5m')
                sig(bimg + '-ep-5', '7800000', '2h-10m')
                sig(bimg + '-ep-5', '8100000', '2h-15m')
                sig(bimg + '-ep-5', '8400000', '2h-20m')
                sig(bimg + '-ep-5', '8700000', '2h-25m')
                sig(bimg + '-ep-5', '9000000', '2h-30m')
                sig(bimg + '-ep-5', '9300000', '2h-35m')
                sig(bimg + '-ep-5', '9600000', '2h-40m')

            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-5-download')
                xhttp.send();
                window.open(videolink[4], '_self')

            }



        }
        e6.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[5]

                video.append(source)
                document.body.append(video)

                sig(bimg + '-ep-6', '9000', '9s')
                sig(bimg + '-ep-6', '20000', '20s')
                sig(bimg + '-ep-6', '40000', '40s')
                sig(bimg + '-ep-6', '120000', '2m')
                sig(bimg + '-ep-6', '300000', '5m')
                sig(bimg + '-ep-6', '900000', '15m')
                sig(bimg + '-ep-6', '1200000', '20m')
                sig(bimg + '-ep-6', '1800000', '30m')
                sig(bimg + '-ep-6', '2400000', '40m')
                sig(bimg + '-ep-6', '3000000', '50m')
                sig(bimg + '-ep-6', '3600000', '1h')
                sig(bimg + '-ep-6', '4200000', '1h-10m')
                sig(bimg + '-ep-6', '4800000', '1h-20m')
                sig(bimg + '-ep-6', '5400000', '1h-30m')
                sig(bimg + '-ep-6', '6000000', '1h-40m')
                sig(bimg + '-ep-6', '6600000', '1h-50m')
                sig(bimg + '-ep-6', '7200000', '2h')
                sig(bimg + '-ep-6', '7500000', '2h-5m')
                sig(bimg + '-ep-6', '7800000', '2h-10m')
                sig(bimg + '-ep-6', '8100000', '2h-15m')
                sig(bimg + '-ep-6', '8400000', '2h-20m')
                sig(bimg + '-ep-6', '8700000', '2h-25m')
                sig(bimg + '-ep-6', '9000000', '2h-30m')
                sig(bimg + '-ep-6', '9300000', '2h-35m')
                sig(bimg + '-ep-6', '9600000', '2h-40m')



            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-6-download')
                xhttp.send();
                window.open(videolink[5], '_self')

            }



        }

        e7.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[6]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-7', '9000', '9s')
                sig(bimg + '-ep-7', '20000', '20s')
                sig(bimg + '-ep-7', '40000', '40s')
                sig(bimg + '-ep-7', '120000', '2m')
                sig(bimg + '-ep-7', '300000', '5m')
                sig(bimg + '-ep-7', '900000', '15m')
                sig(bimg + '-ep-7', '1200000', '20m')
                sig(bimg + '-ep-7', '1800000', '30m')
                sig(bimg + '-ep-7', '2400000', '40m')
                sig(bimg + '-ep-7', '3000000', '50m')
                sig(bimg + '-ep-7', '3600000', '1h')
                sig(bimg + '-ep-7', '4200000', '1h-10m')
                sig(bimg + '-ep-7', '4800000', '1h-20m')
                sig(bimg + '-ep-7', '5400000', '1h-30m')
                sig(bimg + '-ep-7', '6000000', '1h-40m')
                sig(bimg + '-ep-7', '6600000', '1h-50m')
                sig(bimg + '-ep-7', '7200000', '2h')
                sig(bimg + '-ep-7', '7500000', '2h-5m')
                sig(bimg + '-ep-7', '7800000', '2h-10m')
                sig(bimg + '-ep-7', '8100000', '2h-15m')
                sig(bimg + '-ep-7', '8400000', '2h-20m')
                sig(bimg + '-ep-7', '8700000', '2h-25m')
                sig(bimg + '-ep-7', '9000000', '2h-30m')
                sig(bimg + '-ep-7', '9300000', '2h-35m')
                sig(bimg + '-ep-7', '9600000', '2h-40m')



            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-7-download')
                xhttp.send();
                window.open(videolink[6], '_self')

            }



        }
        e8.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[7]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-8', '9000', '9s')
                sig(bimg + '-ep-8', '20000', '20s')
                sig(bimg + '-ep-8', '40000', '40s')
                sig(bimg + '-ep-8', '120000', '2m')
                sig(bimg + '-ep-8', '300000', '5m')
                sig(bimg + '-ep-8', '900000', '15m')
                sig(bimg + '-ep-8', '1200000', '20m')
                sig(bimg + '-ep-8', '1800000', '30m')
                sig(bimg + '-ep-8', '2400000', '40m')
                sig(bimg + '-ep-8', '3000000', '50m')
                sig(bimg + '-ep-8', '3600000', '1h')
                sig(bimg + '-ep-8', '4200000', '1h-10m')
                sig(bimg + '-ep-8', '4800000', '1h-20m')
                sig(bimg + '-ep-8', '5400000', '1h-30m')
                sig(bimg + '-ep-8', '6000000', '1h-40m')
                sig(bimg + '-ep-8', '6600000', '1h-50m')
                sig(bimg + '-ep-8', '7200000', '2h')
                sig(bimg + '-ep-8', '7500000', '2h-5m')
                sig(bimg + '-ep-8', '7800000', '2h-10m')
                sig(bimg + '-ep-8', '8100000', '2h-15m')
                sig(bimg + '-ep-8', '8400000', '2h-20m')
                sig(bimg + '-ep-8', '8700000', '2h-25m')
                sig(bimg + '-ep-8', '9000000', '2h-30m')
                sig(bimg + '-ep-8', '9300000', '2h-35m')
                sig(bimg + '-ep-8', '9600000', '2h-40m')

            }

            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-8-download')
                xhttp.send();
                window.open(videolink[7], '_self')

            }



        }
        e9.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[8]

                video.append(source)
                document.body.append(video)


                sig(bimg + '-ep-9', '9000', '9s')
                sig(bimg + '-ep-9', '20000', '20s')
                sig(bimg + '-ep-9', '40000', '40s')
                sig(bimg + '-ep-9', '120000', '2m')
                sig(bimg + '-ep-9', '300000', '5m')
                sig(bimg + '-ep-9', '900000', '15m')
                sig(bimg + '-ep-9', '1200000', '20m')
                sig(bimg + '-ep-9', '1800000', '30m')
                sig(bimg + '-ep-9', '2400000', '40m')
                sig(bimg + '-ep-9', '3000000', '50m')
                sig(bimg + '-ep-9', '3600000', '1h')
                sig(bimg + '-ep-9', '4200000', '1h-10m')
                sig(bimg + '-ep-9', '4800000', '1h-20m')
                sig(bimg + '-ep-9', '5400000', '1h-30m')
                sig(bimg + '-ep-9', '6000000', '1h-40m')
                sig(bimg + '-ep-9', '6600000', '1h-50m')
                sig(bimg + '-ep-9', '7200000', '2h')
                sig(bimg + '-ep-9', '7500000', '2h-5m')
                sig(bimg + '-ep-9', '7800000', '2h-10m')
                sig(bimg + '-ep-9', '8100000', '2h-15m')
                sig(bimg + '-ep-9', '8400000', '2h-20m')
                sig(bimg + '-ep-9', '8700000', '2h-25m')
                sig(bimg + '-ep-9', '9000000', '2h-30m')
                sig(bimg + '-ep-9', '9300000', '2h-35m')
                sig(bimg + '-ep-9', '9600000', '2h-40m')



            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-9-download')
                xhttp.send();
                window.open(videolink[8], '_self')

            }



        }
        e10.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[9]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-10-download')
                xhttp.send();
                window.open(videolink[9], '_self')

            }



        }
        e11.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[10]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-11-download')
                xhttp.send();
                window.open(videolink[10], '_self')

            }



        }
        e12.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[11]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-12-download')
                xhttp.send();
                window.open(videolink[11], '_self')

            }



        }
        e13.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[12]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-13-download')
                xhttp.send();
                window.open(videolink[12], '_self')

            }



        }
        e14.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[13]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-14-download')
                xhttp.send();
                window.open(videolink[13], '_self')

            }



        }
        e15.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[14]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-15-download')
                xhttp.send();
                window.open(videolink[14], '_self')

            }



        }
        e16.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[15]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-16-download')
                xhttp.send();
                window.open(videolink[15], '_self')

            }



        }
        e17.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[16]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-17-download')
                xhttp.send();
                window.open(videolink[16], '_self')

            }



        }
        e18.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[17]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-18-download')
                xhttp.send();
                window.open(videolink[17], '_self')

            }



        }
        e19.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[18]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-19-download')
                xhttp.send();
                window.open(videolink[18], '_self')

            }



        }
        e20.onclick = function () {
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()
            e11.remove()
            e12.remove()
            e13.remove()
            e14.remove()
            e15.remove()
            e16.remove()
            e17.remove()
            e18.remove()
            e19.remove()
            e20.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");


            onli.innerText = 'Watch Online'
            down.innerText = 'Download(' + size + ')'

            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding = '50px'
            onli.style.marginBottom = '10px'

            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'


            document.body.append(onli, down)


            onli.onclick = function () {
                down.remove()
                onli.remove()

                var video = document.createElement("video");
                var source = document.createElement("source");


                video.setAttribute('controls', 'true')
                video.setAttribute('autoplay', 'true')
                video.setAttribute('id', 'viddd')
                video.setAttribute('controlsList', 'noplaybackrate nodownload ')
                video.setAttribute('oncontextmenu', 'return false;')






                source.setAttribute('id', 'srcc')

                video.width = w * .94
                video.style.marginTop = '20px'

                source.src = videolink[19]

                video.append(source)
                document.body.append(video)



                sig(bimg + '-ep-10', '9000', '9s')
                sig(bimg + '-ep-10', '20000', '20s')
                sig(bimg + '-ep-10', '40000', '40s')
                sig(bimg + '-ep-10', '120000', '2m')
                sig(bimg + '-ep-10', '300000', '5m')
                sig(bimg + '-ep-10', '900000', '15m')
                sig(bimg + '-ep-10', '1200000', '20m')
                sig(bimg + '-ep-10', '1800000', '30m')
                sig(bimg + '-ep-10', '2400000', '40m')
                sig(bimg + '-ep-10', '3000000', '50m')
                sig(bimg + '-ep-10', '3600000', '1h')
                sig(bimg + '-ep-10', '4200000', '1h-10m')
                sig(bimg + '-ep-10', '4800000', '1h-20m')
                sig(bimg + '-ep-10', '5400000', '1h-30m')
                sig(bimg + '-ep-10', '6000000', '1h-40m')
                sig(bimg + '-ep-10', '6600000', '1h-50m')
                sig(bimg + '-ep-10', '7200000', '2h')
                sig(bimg + '-ep-10', '7500000', '2h-5m')
                sig(bimg + '-ep-10', '7800000', '2h-10m')
                sig(bimg + '-ep-10', '8100000', '2h-15m')
                sig(bimg + '-ep-10', '8400000', '2h-20m')
                sig(bimg + '-ep-10', '8700000', '2h-25m')
                sig(bimg + '-ep-10', '9000000', '2h-30m')
                sig(bimg + '-ep-10', '9300000', '2h-35m')
                sig(bimg + '-ep-10', '9600000', '2h-40m')

            }


            down.onclick = function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg + '-ep-20-download')
                xhttp.send();
                window.open(videolink[19], '_self')

            }



        }








    }





}


setTimeout(() => {

    // imgdiv(name,img,q7,size,midcredit,pc)

    // imgdiv('Chhichhore (2019) [1.4GB] & 720','chi',{q720p:'',q1080p:''},{size720:'',size1080:''})

    //     seris('Inside Job {Season 1} (2021) 1080p [300MB]','inside',['https://gdriv.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E01.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E02.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E03.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E04.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E05.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E06.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E07.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E08.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E09.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E10.mp4'],'300MB')



    // imgdiv('Minions (2015)   1080p [800MB]', 'minions', { q1080p: 'https://flame2.bdff.workers.dev/0:/mcubd2/Others/Minions.mp4' }, { size1080: '800MB' })


    seris('Extraction (2020) 1080p [1.1GB]', 'dhaka',['https://flame2.bdff.workers.dev/0:/mcubd2/Others/Extraction.mp4' ],'1.1GB','mv')


    //     seris('Rick and Morty {Season 1} {English Only} 1080p [185MB]','rickk',['https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-save-summer-e1-2-6.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-pickle-e2-3-3.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-love-spray-e3-1-6.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-sleppy-garry-e4-2-4.mp4'],'185MB')



        imgdiv('John Wick 2 || 1080p [1.6GB]','john2',{q1080p:'https://abcd.bdff.workers.dev/0:/John.Wick-2-mp3.mp4'},{size1080:'1.6GB'})


    seris('Major (2022)  [960MB]', 'major',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Major.mp4' ], '960MB','mv' )

    seris('Sita Ramam  [1.3GB]', 'sita',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Sita-Ramam.mp4' ], '1.3GB','mv' )


    seris('Doctors {Season 1} 1080p [400 MB]', 'doc', ['https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E01.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E02.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E03.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E04.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E05.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E06.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E07.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E08.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E09.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E10.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E11.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E12.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E13.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E14.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E15.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E16.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E17.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E18.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E19.mkv', 'https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E20.mkv'], '400MB')


    seris('Generation Ami   [580MB]','ami',['https://root.bdff.workers.dev/0:/mcubd/others/Generation-Aami-(2018).mp4'],'580MB','mv')


 
    // imgdiv('K.G.F: Chapter 2   [1.6GB]','kgf2',{q1080p:'https://gdriv.bdff.workers.dev/0:/OTHERS/kgf2.mp4'},{size1080:'1.6GB'})

    // seris('Jab We Met   [1.3GB]','jab',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Jab-We-Met.mp4'],'1.3GB')





}, 1);



function sig(bimg, sett, tim) {

    var video = document.getElementById('viddd')
    return setTimeout(() => {


        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg + '--' + tim + '--state(' + video.readyState + ')--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '-')
        xhttp.send();

    }, sett);

}

