/*variaveis da pagina de do menu do site */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

/*variaveis da pagina de lista de tarefas importante */
const inputBox = document.getElementById("input-box");
const listContainer =  document.getElementById("list-container"); 

/*variaveis da pagina de lista de tarefas média */
const inputBox2 = document.getElementById("input-box2");
const listContainer2 =  document.getElementById("list-container2"); 

/*variaveis da pagina de lista de tarefas baixa */
const inputBox3 = document.getElementById("input-box3");
const listContainer3 =  document.getElementById("list-container3"); 


/*function do menu*/
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


/*functions da lista de tarefas alta importancia*/
function addTask(){
    if(inputBox.value === ''){
        alert("Você deve escrever algo!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

/*functions da lista de tarefas Média Importancia*/

function addTask2(){
    if(inputBox2.value === ''){
        alert("Você deve escrever algo!");
    }
    else{
        let li2 = document.createElement("li");
        li2.innerHTML = inputBox2.value;
        listContainer2.appendChild(li2);
        let span2 = document.createElement("span");
        span2.innerHTML = "\u00d7";
        li2.appendChild(span2);
    }
    inputBox2.value = "";
    saveData2();
}

listContainer2.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData2();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData2();
    }
}, false);

function saveData2(){
    localStorage.setItem("data2", listContainer2.innerHTML);
}

function showTask2(){
    listContainer2.innerHTML = localStorage.getItem("data2");
}

showTask2();

inputBox2.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask2();
    }
});

/*functions da lista de tarefas baixa */

function addTask3(){
    if(inputBox3.value === ''){
        alert("Você deve escrever algo!");
    }
    else{
        let li3 = document.createElement("li");
        li3.innerHTML = inputBox3.value;
        listContainer3.appendChild(li3);
        let span3 = document.createElement("span");
        span3.innerHTML = "\u00d7";
        li3.appendChild(span3);
    }
    inputBox3.value = "";
    saveData3();
}

listContainer3.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData3();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData3();
    }
}, false);

function saveData3(){
    localStorage.setItem("data3", listContainer3.innerHTML);
}

function showTask3(){
    listContainer3.innerHTML = localStorage.getItem("data3");
}

showTask3();

inputBox3.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask3();
    }
});