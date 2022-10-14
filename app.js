// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(Event) {
  Event.preventDefault();

  // todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // append to list
  todoList.appendChild(todoDiv);

  // clear todoInput value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // delete
  if (item.classList[0] === "trash-btn") {
    // const todo = item.parentElement;
    const todo = item.parentElement;
    todo.remove();
  }
  // complete
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "Completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
