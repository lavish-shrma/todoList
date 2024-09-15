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

    for(let i=0; i<todoList.length; i++){
        const todoObject = todoList[i];
        const { name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
            " class="delete-todo-button">delete</button> 
        `;
        todoListHTML += html;
    }
            
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

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