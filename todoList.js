const todoList = [{
    name: 'make dinner',
    dueDate: '2024-09-15'
 },{
    name: 'wash dishes',
    dueDate: '2024-09-15'
}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach( (todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${index},1);
            renderTodoList();
            " class="delete-todo-button">delete</button> 
        `;
        todoListHTML += html;
    });
            
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

document.querySelector('.js-add-todo-btn')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {

    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
        });
        
    console.log(todoList);
    inputElement.value = '';
    renderTodoList();
}