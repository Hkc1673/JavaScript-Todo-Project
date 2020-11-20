const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addTodo);
}

function addTodo(e){
    const newTodo = todoInput.value.trim();

    addTodoList(newTodo);

    e.preventDefault();
}



function addTodoList(newTodo) {
    
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    const link = document.createElement("a");
    link.className = "delete-item";
    link.href = "#";
    link.innerHTML = '<i class = "fa fa-remove" id = "dlt"></i>';
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);

    todoInput.value = ""

    console.log(listItem);


}


