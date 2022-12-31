
fetch('https://fbbg.vercel.app/ss')
.then(async (data) => {
 a=await data.json()
b(a)
})

function b(d){

d.forEach((i) => {
    console.log(JSON.parse(i))
    
    
});


}