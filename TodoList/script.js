const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    if(inputBox.value === ''){
        alert("You Must Write Some Think");
    }
    else{
        let li = document.createElement('li');
        li.classList.add('text-lg');
        li.classList.add('py-2');
        li.classList.add('px-8');
        li.classList.add('cursor-pointer');
        li.classList.add('relative');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.classList.add('absolute');
        span.classList.add('top-2');
        span.classList.add('right-0');
        span.classList.add('text-2xl');
        span.classList.add('text-2xl');
        span.classList.add('text-2xl');
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
});

listContainer.addEventListener('click',function(e){
if(e.target.tagName === 'LI'){
e.target.classList.toggle('checked');
saveData();
}
else if(e.target.tagName === "SPAN"){
e.target.parentElement.remove();
saveData();
}
},false);


function saveData() {
localStorage.setItem("data", listContainer.innerHTML);
}


function showTask(){
listContainer.innerHTML = localStorage.getItem('data');
}


showTask();