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


/*functions da lista de tarefas*/
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