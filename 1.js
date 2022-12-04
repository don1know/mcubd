function order(){

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'Orderly-marvel-mcu-movies-send1')
    xhttp.send();

document.getElementById('cont').innerHTML=''
document.getElementById('h4').style.display = 'none'
document.getElementById('order').remove();
orderly()

var box = document.createElement("h3");
box.innerText='The Marvel Cinematic Universe Films Collection (2008-2022)'
box.style.cssText = 'text-align:center;margin-top:30px;position:relative'
document.getElementById('mcuListDiv').append(box)

var hr = document.createElement("hr");
hr.style.cssText = 'border: 0; border-top: 1px solid grey;position:relative'
document.getElementById('mcuListDiv').append(hr)

// document.getElementById('mcuListDiv').style.cssText = 'margin-bottom:600px'

var h1 = document.createElement("h1");
h1.innerText='PHASE 1'
h1.style.cssText = 'text-align:center;margin-top:30px;margin-bottom:20px;position:relative'
document.getElementById('mcuListDiv').append(h1)


var h4 = document.createElement("h6");
h4.innerText='1.Iron Man (2008)'
h4.style.cssText = 'margin-top:30px;margin-left:40px;margin-bottom:15px;position:relative'
document.getElementById('mcuListDiv').append(h4)

var h42 = document.createElement("h6");
h42.innerText='2.The Incredible Hulk (2008)'
h42.style.cssText = 'margin-top:0px;margin-left:40px;margin-bottom:15px;position:relative'
document.getElementById('mcuListDiv').append(h42)

var h43 = document.createElement("h6");
h43.innerText='3.Iron Man 2 (2010)'
h43.style.cssText = 'margin-top:0px;margin-left:40px;margin-bottom:15px;position:relative'
document.getElementById('mcuListDiv').append(h43)

var h44 = document.createElement("h6");
h44.innerText='4.Thor (2011)'
h44.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(h44)

var h45 = document.createElement("h6");
h45.innerText='5.Captain America: The First Avenger (2011)'
h45.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(h45)


var h46 = document.createElement("h6");
h46.innerText="6.Marvel's The Avengers (2012)"
h46.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(h46)



var h12 = document.createElement("h1");
h12.innerText='PHASE 2'
h12.style.cssText = 'position:relative;text-align:center;margin-top:30px;margin-bottom:20px'
document.getElementById('mcuListDiv').append(h12)


var h47 = document.createElement("h6");
h47.innerText="1.Iron Man 3 (2013)"
h47.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(h47)


var h48 = document.createElement("h6");
h48.innerText="2.Thor: The Dark World (2013)"
h48.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(h48)


var h49 = document.createElement("h6");
h49.innerText="3.Captain America: The Winter Soldier (2014)"
h49.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(h49)

var h4a = document.createElement("h6");
h4a.innerText="4.Guardians of the Galaxy (2014)"
h4a.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(h4a)


var h4b = document.createElement("h6");
h4b.innerText="5.Avengers: Age of Ultron (2015)"
h4b.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(h4b)



var h4c = document.createElement("h6");
h4c.innerText="6.Ant-Man (2015)"
h4c.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(h4c)



var h13 = document.createElement("h1");
h13.innerText='PHASE 3'
h13.style.cssText = 'position:relative;text-align:center;margin-top:30px;margin-bottom:20px'
document.getElementById('mcuListDiv').append(h13)


var d = document.createElement("h6");
d.innerText="1.Captain America: Civil War (2016)"
d.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(d)


var e = document.createElement("h6");
e.innerText="2.Doctor Strange (2016)"
e.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(e)

var f = document.createElement("h6");
f.innerText="3.Guardians of the Galaxy Vol. 2 (2017)"
f.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(f)


var g = document.createElement("h6");
g.innerText="4.Spider-Man: Homecoming (2017)"
g.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(g)

var h = document.createElement("h6");
h.innerText="5.Thor: Ragnarok (2017)"
h.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(h)

var i = document.createElement("h6");
i.innerText="6.Black Panther (2018)"
i.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(i)

var j = document.createElement("h6");
j.innerText="7.Avengers: Infinity War (2018)"
j.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(j)

var j1 = document.createElement("h6");
j1.innerText="8.Ant-Man and the Wasp (2018)"
j1.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(j1)

var j2 = document.createElement("h6");
j2.innerText="9.Captain Marvel (2019)"
j2.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(j2)

var j3 = document.createElement("h6");
j3.innerText="10.Avengers: Endgame (2019)"
j3.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(j3)


var j4 = document.createElement("h6");
j4.innerText="11.Spider-Man: Far From Home (2019)"
j4.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(j4)

setTimeout(() => {
    var xhttp = new XMLHttpRequest();
xhttp.open("POST", 'https://nodebd.vercel.app/', true);
xhttp.setRequestHeader('reqs', 'Orderly-marvel-mcu-movies-send2')
xhttp.send();
}, 8000);



var yt43 = document.createElement("h6");
yt43.innerText="(PHASE 1 - PHASE 3 is known as infinity SAGA.PHASE 4 - PHASE 6 will be known as The Multiverse SAGA)"
yt43.style.cssText = 'position:relative;margin-top:30px;text-align:center;margin-bottom:30px;color:lightgray'
document.getElementById('mcuListDiv').append(yt43)

var h14 = document.createElement("h1");
h14.innerText='PHASE 4'
h14.style.cssText = 'position:relative;text-align:center;margin-top:30px;margin-bottom:20px'
document.getElementById('mcuListDiv').append(h14)


var yth1 = document.createElement("h6");
yth1.innerText="1.WandaVision (2021)  [Web Series]"
yth1.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yth1)


var yth2 = document.createElement("h6");
yth2.innerText="2.The Falcon and the Winter Soldier (2021)  [Web Series]"
yth2.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yth2)


var yth3 = document.createElement("h6");
yth3.innerText="3.Loki (2021)  [Web Series]"
yth3.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yth3)

var yt0 = document.createElement("h6");
yt0.innerText="4.Black Widow (2021)"
yt0.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yt0)


var yth4 = document.createElement("h6");
yth4.innerText="5.What If...? (2021)  [Web Series]"
yth4.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yth4)





var yt1 = document.createElement("h6");
yt1.innerText="6.Shang-Chi and The Legend of The Ten Rings (2021)"
yt1.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yt1)


var yt2 = document.createElement("h6");
yt2.innerText="7.Eternals (2021)"
yt2.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yt2)

var yth5 = document.createElement("h6");
yth5.innerText="8.Hawkeye (2021)  [Web Series]"
yth5.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yth5)





var yt3 = document.createElement("h6");
yt3.innerText="9.Spider-Man: No Way Home (2021)"
yt3.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yt3)


var yth6 = document.createElement("h6");
yth6.innerText="10.Moon Knight (2022)  [Web Series]"
yth6.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yth6)


var yt4 = document.createElement("h6");
yt4.innerText="11.Doctor Strange in the Multiverse of Madness (2022)"
yt4.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yt4)



var yth8 = document.createElement("h6");
yth8.innerText="12.Ms. Marvel (2022)  [Web Series]"
yth8.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yth8)


var yt5 = document.createElement("h6");
yt5.innerText="13.Thor: Love and Thunder (2022)"
yt5.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yt5)


var yth90 = document.createElement("h6");
yth90.innerText="14.I Am Groot (2022)  [Web Series]"
yth90.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yth90)


var yth9 = document.createElement("h6");
yth9.innerText="15.She-Hulk: Attorney at Law (2022)  [Web Series]"
yth9.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yth9)


var ytha = document.createElement("h6");
ytha.innerText="16.Werewolf by Night (2022) [Special Presentation]"
ytha.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(ytha)


var yt6 = document.createElement("h6");
yt6.innerText="17.Black Panther: Wakanda Forever (2022) "
yt6.style.cssText = 'position:relative;margin-top:0px;margin-left:40px;margin-bottom:15px'
document.getElementById('mcuListDiv').append(yt6)


var yt7 = document.createElement("h6");
yt7.innerText="Upcoming..."
yt7.style.cssText = 'position:relative;margin-top:0px;text-align: center;margin-bottom:15px;color: aqua;'
document.getElementById('mcuListDiv').append(yt7)



var ythb = document.createElement("h6");
ythb.innerText="18. The Guardians of the Galaxy Holiday Special (2022) {Upcoming} [Special Presentation]"
ythb.style.cssText = 'position:relative;margin-top:0px;text-align: center;margin-bottom:15px;color: aqua;'
document.getElementById('mcuListDiv').append(ythb)





var h15 = document.createElement("h1");
h15.innerText='PHASE 5'
h15.style.cssText = 'position:relative;text-align:center;margin-top:30px;margin-bottom:20px'
document.getElementById('mcuListDiv').append(h15)

var yp0 = document.createElement("h6");
yp0.innerText="Ant-Man and the Wasp: Quantumania (2023) {Upcoming}"
yp0.style.cssText = 'position:relative;margin-top:0px;margin-bottom:15px;text-align: center;color: aqua;'
document.getElementById('mcuListDiv').append(yp0)


var yp1 = document.createElement("h6");
yp1.innerText="Guardians of the Galaxy Vol. 3 (2023) {Upcoming}"
yp1.style.cssText = 'position:relative;margin-top:0px;margin-bottom:15px;text-align: center;color: aqua;'
document.getElementById('mcuListDiv').append(yp1)


var yp2 = document.createElement("h6");
yp2.innerText="The Marvels (2023) {Upcoming}"
yp2.style.cssText = 'position:relative;margin-top:0px;margin-bottom:15px;text-align: center;color: aqua;'
document.getElementById('mcuListDiv').append(yp2)



var yp3 = document.createElement("h6");
yp3.innerText="Blade (2023) {Upcoming}"
yp3.style.cssText = 'position:relative;margin-top:0px;margin-bottom:15px;text-align: center;color: aqua;'
document.getElementById('mcuListDiv').append(yp3)


var yp4 = document.createElement("h6");
yp4.innerText="Captain America: New World Order (2024) {Upcoming}"
yp4.style.cssText = 'position:relative;margin-top:0px;margin-bottom:15px;text-align: center;color: aqua;'
document.getElementById('mcuListDiv').append(yp4)


var yp5 = document.createElement("h6");
yp5.innerText="Thunderbolts (2024) {Upcoming}"
yp5.style.cssText = 'position:relative;margin-top:0px;margin-bottom:15px;text-align: center;color: aqua;'
document.getElementById('mcuListDiv').append(yp5)




var yp7 = document.createElement("h6");
yp7.innerText="(More Movies will take place in PHASE 5)"
yp7.style.cssText = 'position:relative;margin-top:0px;margin-bottom:15px;text-align: center;color: aqua;'
document.getElementById('mcuListDiv').append(yp7)



var h16 = document.createElement("h1");
h16.innerText='PHASE 6'
h16.style.cssText = 'position:relative;text-align:center;margin-top:30px;margin-bottom:20px'
document.getElementById('mcuListDiv').append(h16)


var yy0 = document.createElement("h6");
yy0.innerText="Fantastic Four (2024) {Upcoming}"
yy0.style.cssText = 'position:relative;margin-top:0px;margin-bottom:15px;text-align: center;color: aqua;'
document.getElementById('mcuListDiv').append(yy0)

var yy1 = document.createElement("h6");
yy1.innerText="Avengers: The Kang Dynasty (2025) {Upcoming}"
yy1.style.cssText = 'position:relative;margin-top:0px;margin-bottom:15px;text-align: center;color: aqua;'
document.getElementById('mcuListDiv').append(yy1)



var yy2 = document.createElement("h6");
yy2.innerText="Avengers: Secret Wars (2025) {Upcoming}"
yy2.style.cssText = 'position:relative;margin-top:0px;margin-bottom:15px;text-align: center;color: aqua;'
document.getElementById('mcuListDiv').append(yy2)


var yy3 = document.createElement("h6");
yy3.innerText="('Avengers: Secret Wars' will be the next ENDGAME.There will be more movies in PHASE 6) "
yy3.style.cssText = 'position:relative;margin-top:0px;margin-bottom:15px;text-align: center;color: aqua;'
document.getElementById('mcuListDiv').append(yy3)



var hr1 = document.createElement("hr");
hr1.style.cssText = 'position:relative;border: 0; border-top: 1px solid grey'
document.getElementById('mcuListDiv').append(hr1)

setTimeout(() => {
    var xhttp = new XMLHttpRequest();
xhttp.open("POST", 'https://nodebd.vercel.app/', true);
xhttp.setRequestHeader('reqs', 'Orderly-marvel-mcu-movies-send3')
xhttp.send();
}, 16000);





}

var info
if(navigator.deviceMemory){
    info=navigator.deviceMemory+'gb-h'+screen.height+'x'+screen.width
}else{
    info=screen.height+'x'+screen.width
}

if(navigator){var platformm=navigator.platform;var devicee=  navigator.appVersion}else{var platformm='sorry!';var devicee='sorry!'}





function me() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'fb')
    xhttp.send();
    window.open('https://mcubd.netlify.app/contact','_self')

}

function mcus() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/ram', true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({name:'seris--',ramxhw:info,device:devicee,platform:platformm}));
    window.open('https://mcubd.netlify.app/mcu-seris/index','_self')
    
}

function mcu() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/ram', true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({name:'Mcu-but-',ramxhw:info,device:devicee,platform:platformm}));

    window.open('https://mcubd.netlify.app', '_self')
}

function home() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/ram', true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({name:'mcu-logo-',ramxhw:info,device:devicee,platform:platformm}));
    window.open('https://mcubd.netlify.app', '_self')
}

function mar() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/ram', true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({name:'fox-',ramxhw:info,device:devicee,platform:platformm}));
    window.open('https://mcubd.netlify.app/marvel/index','_self')
    
}

// function other() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.open("POST", 'https://nodebd.vercel.app/', true);
//     xhttp.setRequestHeader('reqs', 'other-'+info)
//     xhttp.send();


//     window.open('https://mcubd.netlify.app/others/index','_self')
// }



// imgdiv('Chhichhore (2019) [1.4GB] & 720','chi',{q720p:'',q1080p:''},{size720:'',size1080:''})

// function imgdiv(bname, bimg, q7pp,size,t1,t2) {


    function other() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/ram', true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify({name:'others--',ramxhw:info,device:devicee,platform:platformm}));
    
    
        window.open('https://mcubd.netlify.app/others/index','_self')
    }

function imgdiv(bname, bimg,videolink,size) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var g = w * .3939



    var chidiv = document.createElement("div");
    var iiidiv = document.createElement("div");
    var p = document.createElement("p");
    p.innerText = bname
    var image = document.createElement("img");

    chidiv.classList.add('chi');
    iiidiv.classList.add('iii');

    if(size.imgchace=='yeah'){
    image.src = 'https://mcubd1.web.app/logoimg/'+bimg+'.jpg'
    }else{
    image.src = '../logoimg/'+bimg+'.jpg'
    }




    iiidiv.append(image)
    chidiv.append(iiidiv, p)
    chidiv.style.position='relative'
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
        document.getElementById('bg-vid').remove()
        document.getElementById('h4').innerHTML=''
        document.getElementById('mcuListDiv').innerHTML=''
        document.body.style.cssText = 'background-image:none;background-color: #0F0F0F;color: rgb(255, 255, 255);margin: 0px;padding: 0px;margin-left: 1.2%;margin-right: 1.2%;'
        document.getElementById('h4').style.cssText ='margin-bottom:45px;'


        if(document.getElementById('order')==null){}else{document.getElementById('order').remove()}



        document.getElementById('cont').remove()
        

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg)
        xhttp.send();


        var q720 = document.createElement("button");
        var q1080 = document.createElement("button");
        var downonly = document.createElement("button");

        
        q720.setAttribute('id', 'q720')
        q1080.setAttribute('id', 'q1080')
        downonly.setAttribute('id', 'downonly')


        q720.innerText = '720p ('+size.size720+')'
        q1080.innerText = '1080p ('+size.size1080+')'
        downonly.innerText = 'Download only ('+size.sizedownonly+')'


        q1080.style.display = 'block'
        q1080.style.width = '100%'
        q1080.style.padding ='50px'
        q1080.style.marginBottom = '10px'

        
        q720.style.display = 'block'
        q720.style.width = '100%'
        q720.style.padding = '50px'
        q720.style.marginBottom = '10px'

        downonly.style.display = 'block'
        downonly.style.width = '100%'
        downonly.style.padding = '50px'
        downonly.style.marginBottom = '10px'

        // if(videolink.q720p==undefined || videolink.q720p=='' ){
        //     if(videolink.q1080p==undefined || videolink.q1080p=='' ){}else{
        //         document.body.append(q1080)
        //     }
        // }else{
        //     if(videolink.q1080p==undefined || videolink.q1080p=='' ){document.body.append(q720)}else{
        //         document.body.append(q720,q1080)
        //     }
        // }

    



        if(videolink.q720p==undefined || videolink.q720p=='' ){
            if(videolink.q1080p==undefined || videolink.q1080p=='' ){
                if(videolink.downonly==undefined || videolink.downonly=='' ){
                }else{document.body.append(downonly)}
            }else{
                if(videolink.downonly==undefined || videolink.downonly=='' ){
                    document.body.append(q1080)
                }else{document.body.append(downonly,q1080)}
            }
        }else{
            if(videolink.q1080p==undefined || videolink.q1080p=='' ){
                if(videolink.downonly==undefined || videolink.downonly=='' ){
                    document.body.append(q720)
                }else{
                    document.body.append(downonly,q720)
                }
            }
            else{

                if(videolink.downonly==undefined || videolink.downonly==''){
                document.body.append(q720,q1080)
                }else{
                    document.body.append(downonly,q720,q1080)
                }

            }






        }


        q720.onclick = () => {

            var q720 = document.getElementById('q720')
            if(q720==null){}else{q720.remove()}
            var q1080 = document.getElementById('q1080')
            if(q1080==null){}else{q1080.remove()}
            var downonly = document.getElementById('downonly')
            if(downonly==null){}else{downonly.remove()}


        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg+'720-click')
        xhttp.send();

        var onli = document.createElement("button");
        var down7 = document.createElement("button");
        
        onli.setAttribute('id', 'onli')
        down7.setAttribute('id', 'down')

        onli.innerText = 'Watch Online'
        down7.innerText = 'Download (' + size.size720 + ')'

        down7.style.display = 'block'
        down7.style.width = '100%'
        down7.style.padding ='50px'
        
        onli.style.display = 'block'
        onli.style.width = '100%'
        onli.style.padding = '50px'
        onli.style.marginBottom = '10px'

        // document.body.append(video, button)
        document.body.append(onli,down7)
    



onli.onclick = () => {
        var onli = document.getElementById('onli')
        onli.remove()
        var dow = document.getElementById('down')
        dow.remove()


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
        source.src = videolink.q720p

        video.append(source)

        document.body.append(video)



        sig(bimg,'9000','9s')
        sig(bimg,'20000','20s')
        sig(bimg,'40000','40s')
        sig(bimg,'120000','2m')
        sig(bimg,'300000','5m')
        sig(bimg,'900000','15m')
        sig(bimg,'1200000','20m')
        sig(bimg,'1800000','30m')
        sig(bimg,'2400000','40m')
        sig(bimg,'3000000','50m')
        sig(bimg,'3600000','1h')
        sig(bimg,'4200000','1h-10m')
        sig(bimg,'4800000','1h-20m')
        sig(bimg,'5400000','1h-30m')
        sig(bimg,'6000000','1h-40m')
        sig(bimg,'6600000','1h-50m')
        sig(bimg,'7200000','2h')
        sig(bimg,'7500000','2h-5m')
        sig(bimg,'7800000','2h-10m')
        sig(bimg,'8100000','2h-15m')
        sig(bimg,'8400000','2h-20m')
        sig(bimg,'8700000','2h-25m')
        sig(bimg,'9000000','2h-30m')
        sig(bimg,'9300000','2h-35m')
        sig(bimg,'9600000','2h-40m')




        }



        down7.onclick = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", 'https://nodebd.vercel.app/', true);
            xhttp.setRequestHeader('reqs', bimg+'-720-download')
            xhttp.send();
            window.open(videolink.q720p, '_self') }


    }


    q1080.onclick = () => {


        var q720 = document.getElementById('q720')
        if(q720==null){}else{q720.remove()}
        var q1080 = document.getElementById('q1080')
        if(q1080==null){}else{q1080.remove()}
        var downonly = document.getElementById('downonly')
        if(downonly==null){}else{downonly.remove()}



        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg+'-1080-click')
        xhttp.send();

        var onli = document.createElement("button");
        var down7 = document.createElement("button");
        
        onli.setAttribute('id', 'onli')
        down7.setAttribute('id', 'down')

        onli.innerText = 'Watch Online'
        down7.innerText = 'Download (' + size.size1080 + ')'

        down7.style.display = 'block'
        down7.style.width = '100%'
        down7.style.padding ='50px'
        
        onli.style.display = 'block'
        onli.style.width = '100%'
        onli.style.padding = '50px'
        onli.style.marginBottom = '10px'

        // document.body.append(video, button)
        document.body.append(onli,down7)
    



onli.onclick = () => {
        var onli = document.getElementById('onli')
        onli.remove()
        var dow = document.getElementById('down')
        dow.remove()


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
        source.src = videolink.q1080p

        video.append(source)

        document.body.append(video)



        sig(bimg,'9000','9s')
        sig(bimg,'20000','20s')
        sig(bimg,'40000','40s')
        sig(bimg,'120000','2m')
        sig(bimg,'300000','5m')
        sig(bimg,'900000','15m')
        sig(bimg,'1200000','20m')
        sig(bimg,'1800000','30m')
        sig(bimg,'2400000','40m')
        sig(bimg,'3000000','50m')
        sig(bimg,'3600000','1h')
        sig(bimg,'4200000','1h-10m')
        sig(bimg,'4800000','1h-20m')
        sig(bimg,'5400000','1h-30m')
        sig(bimg,'6000000','1h-40m')
        sig(bimg,'6600000','1h-50m')
        sig(bimg,'7200000','2h')
        sig(bimg,'7500000','2h-5m')
        sig(bimg,'7800000','2h-10m')
        sig(bimg,'8100000','2h-15m')
        sig(bimg,'8400000','2h-20m')
        sig(bimg,'8700000','2h-25m')
        sig(bimg,'9000000','2h-30m')
        sig(bimg,'9300000','2h-35m')
        sig(bimg,'9600000','2h-40m')




        }



        down7.onclick = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", 'https://nodebd.vercel.app/', true);
            xhttp.setRequestHeader('reqs', bimg+'-1080-download')
            xhttp.send();
            window.open(videolink.q1080p, '_self') }


    }


    downonly.onclick = () => {

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg+'-downonly-download-started')
        xhttp.send();
        window.open(videolink.downonly, '_self') }


   }





}


    



setTimeout(() => {

    // imgdiv(name,img,q7,size,midcredit,pc)

    // imgdiv('Chhichhore (2019) [1.4GB] & 720','chi',{q720p:'',q1080p:''},{size720:'',size1080:''})

    // imgdiv('Thor ragnarok (2017) [1.3GB]', 'thor3',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/Thor-ragnarock-mp3.mp4'}, {size720:'1.3GB'})


    // imgdiv('Guardian of the galaxy vol.2  (2017) [1.2GB]', 'galaxy2',{q720p:'https://abcd.bdff.workers.dev/0:/Guardian2-mp3.mp4'}, {size720:'1.2GB',imgchace:'yeah'})

    // imgdiv('Avengers: Infinity War   (2018)         [1.3GB]', 'war',{q720p:'https://abcd.bdff.workers.dev/0:/infinity.mp4'}, {size720:'1.3GB',imgchace:'yeah'})



    // imgdiv('Avengers: Endgame(2019) [1.6GB]','end',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/Endgame720p.mp4'}, {size720:'1.6GB',imgchace:'yeah'})


    // imgdiv('Avengers age of ultron (2015) [1.2GB]', 'Avengers2',{q720p:'https://abcd.bdff.workers.dev/0:/ultron-mp3.mp4'}, {size720:'1.2GB',imgchace:'yeah'})





    // imgdiv('Captain America: The First Avenger (2011)    [1.2GB]','cap',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/captain-america-720.mp4'}, {size720:'1.2GB'})


    // imgdiv('Iron Man  (2008) [984MB]','iron',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/IronMan-720p.mp4'}, {size720:'984MB',imgchace:'yeah'})


    // imgdiv('Captain America: Civil War  (2016) [1.5GB]','civil',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/Civil-war.mp4'}, {size720:'1.5GB'})

    // imgdiv('Iron Man 3 (2013) [1.2GB]','iron3',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/Iron-man3.mp4'}, {size720:'1.2GB'})


    // imgdiv('Spider-Man: Homecoming (2017) [1.3GB]','spi1',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/spi1.mp4'}, {size720:'1.3GB'})


    // imgdiv('Captain America: The Winter Soldier (2014) [1.3GB]','cap2',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/cap2.mp4'}, {size720:'1.3GB'})







    // imgdiv('Ant-man (2015) [920MB]', 'ant',{q720p:'https://abcd.bdff.workers.dev/0:/Ant.Man-mp3.mp4'}, {size720:'920MB'})


    // imgdiv('Guardian of the galaxy vol.1   (2014)   [1.9GB]','galaxy',{q1080p:'https://abcd.bdff.workers.dev/0:/guardian.mp4'}, {size1080:'1.9GB'})



    // imgdiv('Doctor Strange (2016) [1.2GB]', 'dr',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/Doctor.Strange.2016.720p.mp4'}, {size720:'1.2GB',imgchace:'yeah'})



    // imgdiv('Ant-Man and the Wasp  (2018)  [1.2GB]','ant2',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/ant2.mp4'}, {size720:'1.2GB'})

    // imgdiv('Doctor Strange in the Multiverse of Madness (2022)  [1.5GB]','drst2',{downonly:'https://gdriv.bdff.workers.dev/0:/MCU-720/imax/dr.strange.2-imax-hevc.mp4'}, {sizedownonly:'1.5GB',imgchace:'yeah'}) 


}, 1);



function sig(bimg,sett,tim){

    var video=document.getElementById('viddd') 
   return setTimeout(() => {
           // var xhttp = new XMLHttpRequest();
           // xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-'+tim+'---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
           // xhttp.send();



           var xhttp = new XMLHttpRequest();
           xhttp.open("POST", 'https://nodebd.vercel.app/', true);
           xhttp.setRequestHeader('reqs',bimg+'--'+tim+'--state('+video.readyState+')--'+Math.trunc(video.currentTime / 60 / 60)+':'+Math.trunc((video.currentTime / 60) % 60)+':'+Math.trunc(video.currentTime % 60)+'-')
           xhttp.send();
   
       }, sett);
   
}




function orderly(){
    setTimeout(() => {


        imgdiv('Iron Man  (2008) [984MB]','iron',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/IronMan-720p.mp4'}, {size720:'984MB'})


        imgdiv('Captain America: The First Avenger (2011)    [1.2GB]','cap',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/captain-america-720.mp4'}, {size720:'1.2GB'})



        imgdiv('Iron Man 3 (2013) [1.2GB]','iron3',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/Iron-man3.mp4'}, {size720:'1.2GB'})


        imgdiv('Captain America: The Winter Soldier (2014) [1.3GB]','cap2',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/cap2.mp4'}, {size720:'1.3GB'})


        imgdiv('Guardian of the galaxy vol.1   (2014)   [1.9GB]','galaxy',{q1080p:'https://abcd.bdff.workers.dev/0:/guardian.mp4'}, {size1080:'1.9GB'})


        imgdiv('Avengers age of ultron (2015) [1.2GB]', 'Avengers2',{q720p:'https://abcd.bdff.workers.dev/0:/ultron-mp3.mp4'}, {size720:'1.2GB'})


        imgdiv('Ant-man (2015) [920MB]', 'ant',{q720p:'https://abcd.bdff.workers.dev/0:/Ant.Man-mp3.mp4'}, {size720:'920MB'})


        imgdiv('Captain America: Civil War  (2016) [1.5GB]','civil',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/Civil-war.mp4'}, {size720:'1.5GB'})


        imgdiv('Doctor Strange (2016) [1.2GB]', 'dr',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/Doctor.Strange.2016.720p.mp4'}, {size720:'1.2GB'})


    
        imgdiv('Guardian of the galaxy vol.2  (2017) [1.2GB]', 'galaxy2',{q720p:'https://abcd.bdff.workers.dev/0:/Guardian2-mp3.mp4'}, {size720:'1.2GB'})


        imgdiv('Spider-Man: Homecoming (2017) [1.3GB]','spi1',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/spi1.mp4'}, {size720:'1.3GB'})


        imgdiv('Thor ragnarok (2017) [1.3GB]', 'Thor3',{q720p:'https://abcd.bdff.workers.dev/0:/Thor-ragnarock-mp3.mp4'}, {size720:'1.3GB'})
    

        imgdiv('Avengers: Infinity War   (2018)         [1.3GB]', 'war',{q720p:'https://abcd.bdff.workers.dev/0:/infinity.mp4'}, {size720:'1.3GB'})

        imgdiv('Ant-Man and the Wasp  (2018)  [1.2GB]','ant2',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/ant2.mp4'}, {size720:'1.2GB'})
    
        imgdiv('Avengers: Endgame(2019) [1.6GB]','end',{q720p:'https://gdriv.bdff.workers.dev/0:/MCU-720/Endgame720p.mp4'}, {size720:'1.6GB'})
    
    
        imgdiv('Doctor Strange in the Multiverse of Madness (2022)  [1.5GB]','drst2',{downonly:'https://gdriv.bdff.workers.dev/0:/MCU-720/imax/dr.strange.2-imax-hevc.mp4'}, {sizedownonly:'1.5GB'})
    
    
    }, 1);

}




let xhttp = new XMLHttpRequest();
xhttp.open("POST", 'https://nodebd.vercel.app/ram', true);
xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhttp.send(JSON.stringify({name:'^^'+platformm,ramxhw:info,device:devicee,platform:platformm}));