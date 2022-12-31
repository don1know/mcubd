
fetch('https://fbbg.vercel.app/ss')
.then(async (data) => {
 a=await data.json()
b(a)
})

function b(d){

d.forEach((item) => {
    console.log(item)
    
});


}