// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo)

// Functions
function addTodo(Event){
    Event.preventDefault();

    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    // complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-regular fa-square-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-regular fa-trash-can-xmark"></i>'
    trashButton.classList.add('complete-btn');
    todoDiv.appendChild(trashButton);

    // append to list
    todoList.appendChild(todoDiv)
}

