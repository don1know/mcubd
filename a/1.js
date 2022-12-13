setTimeout(() => {
var parent= document.getElementById('page-container')
var count=parent.children.length
var arr=[]
for (let i = 0; i < count; i++) {
    const id= parent.children[i].id
    arr.push(id)
}
arr.forEach(id => {
    if(  id !='pf19' && id !='pf1a' && id !='pf1b' && id !='pf1c' && id !='pf1d'){
        document.getElementById(id).remove()
    }

        
});







  

}, 1000);