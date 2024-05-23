let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs= document.querySelectorAll('.box');
let drag = null;

btn.onclick = function(){
    if(inp.value != ''){
        boxs[0].innerHTML += `
        <p class="item" draggable ="true">${inp.value}</p>
        `
        inp.value = '';
    }
    dragItem();
}
function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener('dragstart',function(){
            drag = item;
            item.Style.oppacity = '0.5';
        
    })

    
        item.addEventListener('dragend',function(){
           drag = null; 
           item.Style.oppacity = '1';
    })
    boxs.forEach(box=>{
        box.addEventListener('dragover',function(e){
            e.preventDefault()
            this.Style.background = '#090';
            this.Style.color = white ;
        })
        box.addEventListener('dragleave',function(){
            this.Style.background = '#fff';
            this.Style.color = '#000';
        })
        box.addEventListener('drop',function(){
            this.append(drag)
            this.Style.background = '#fff';
            this.Style.color = '#000';

        })
    })

    })}
