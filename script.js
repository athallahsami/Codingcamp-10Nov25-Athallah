console.log("Hello, word");

// Temporary storage for todo items
let todos = [];
function addTodo() {
    const todoInput = document.getElementById("todo-input")
    const todoDate = document.getElementById("todo-date")
    console.log("Input", todoInput.value);
    console.log("Date", todoDate.value);

    if (todoInput.value === ''|| todoDate.value ==='') {
        alert("please fill in both fields.");
    }else{
        // Add todo item to the list
       todos.push({text: todoInput.value, date: todoDate.value});
       todoInput.value = '';
       todoDate.value = '';
       renderTodos();
    }
}
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo,_)=> {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text} <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr />
        </li>`;
    });
}
function clearTodos() {
    todos = [];
    renderTodos();
}
function filterTodos(){
     const filtered = todos.filter(item => !item.done);
            const todoList = document.getElementById('todo-List');
            todoList.innerHTML = '';
}
