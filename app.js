

let focus=document.querySelector('body');
let getColor=document.getElementById('colorinput');
let value=document.getElementById('result');

getColor.addEventListener('input',()=>{
    focus.style.backgroundColor=getColor.value;
    value.innerHTML=getColor.value;
})

