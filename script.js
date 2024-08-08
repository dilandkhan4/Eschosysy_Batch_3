document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todo-input');
    addTodoItem(todoInput.value);
    todoInput.value = '';
});

function addTodoItem(task) {
    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
}
