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
    document.addEventListener("DOMContentLoaded", loadAllTodos);

}

function loadAllTodos() {
    let todos = getTodosFromStorage();

    todos.forEach(function(todo) {
        addTodoList(todo);
    });
}

function addTodo(e){
    const newTodo = todoInput.value.trim();

    if (newTodo === ""){
        showAlert("danger", "Please enter a todo!");
    }
    else {
        addTodoList(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Added Todo");
    }

    e.preventDefault();
}

function getTodosFromStorage() {
    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
    
}

function showAlert(type, message) {
    
    const alertBox = document.createElement("div");
    alertBox.className = `alert alert-${type}`
    const alertText = document.createElement("p");
    alertText.textContent = message;
    alertBox.appendChild(alertText);
    firstCardBody.appendChild(alertBox)

    setTimeout(function() {
        alertBox.remove();
    },1500);

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

}




