const inp= document.querySelector(".text");
const list=document.querySelector("#list-cont");
const addBut=document.querySelector(".add");

addBut.addEventListener("click",addEvent);

function addEvent(){
    let box=document.createElement('li');
    console.dir(inp);
    if(inp.value==''){
        alert("Null Input");
    }
    else{
        box.innerHTML=`${inp.value}`;
        list.appendChild(box);
        let span=document.createElement("span");
        span.innerHTML=`\u00d7`;
        box.appendChild(span);
    }
    inp.value="";
    saveData();
    
}

list.addEventListener("click",doneTask);
function doneTask(event){
    console.dir(event);
    console.dir(event.target);
    if(event.target.nodeName=="LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.nodeName=="SPAN"){
        event.target.parentElement.remove();
    }
    saveData();
}

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showData(){
    try {
        let savedData = localStorage.getItem("data");
        if(savedData){
            list.innerHTML = savedData;
        }
    } catch (e) {
        console.error("Local storage load error: ", e);
    }
}
showData();
