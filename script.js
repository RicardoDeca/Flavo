//estado do count
let num = 0
const p = document.body.querySelectorAll('p')[2]
//função de soma
function plus(){if (p.innerText <10) {
    num = num +1
    showMe()   
}
} 
//função de subtração 
function minus(){if(p.innerText >0){
    num = num -1
    showMe()}
}
//função de renderização
function showMe(){
    p.innerText = num
}
 
const h2=document.body.querySelectorAll('h2')[1]
function jar(){
    h2.innerText="$25"
}

function bag(){
    h2.innerText="$15"
}
