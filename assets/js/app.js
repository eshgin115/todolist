// let box =document.querySelector('#box')
// let droparea=document.querySelector('#droparea')
// let icon=document.querySelector('#droparea i');
// box.ondragstart=function(){
//     console.log('salam');
// }
// box.ondragend=()=>{
//     console.log('bye');
// }
// box.ondrag=()=>{
//     console.log('continue');
// }
// droparea.addEventListener('dragover',function(){
// this.style.border='3px dashed red'
// icon.style.opacity = '1'

// })
// droparea.addEventListener('dragleave',function(){
//     this.style.border='3px solid red'
//     icon.style.opacity = '0'

// })

























// let items=document.querySelectorAll('.item')
// for(let item of items){
//     item.ondragstart=function(param){
//         param.dataTransfer.setData('param',this.id);
//     }
// }
// let droparea=document.querySelector('#droparea')
// droparea.ondragover=function(e){
// e.preventDefault();
// }
// droparea.ondrop=function(e){
//     let id=e.dataTransfer.getData('param')
//     let newItem=document.getElementById(id)
//     droparea.appendChild(newItem);

// }










let items=document.querySelectorAll('.item')
for(let item of items){
    item.ondragstart=function(param){
        param.dataTransfer.setData('param',this.id)
    }
}
let droparea=document.querySelector('#droparea')
droparea.ondragover=function(e){
    e.preventDefault();

}
droparea.ondrop=function(e){
let id=e.dataTransfer.getData('param')
let newItem=document.getElementById(id)
droparea.appendChild(newItem)
}


let items1=document.querySelectorAll('droparea .item')
for(let item of items1){
    item.ondragstart=function(param){
        param.dataTransfer.setData('param',this.id)
    }
}
let dragarea=document.querySelector('#dragarea')
dragarea.ondragover=function(e){
    e.preventDefault();
}
dragarea.ondrop=function(e){
let id=e.dataTransfer.getData('param')
let newItem=document.getElementById(id)
dragarea.appendChild(newItem)
}
