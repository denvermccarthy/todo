import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();


const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async(e) => {
    // on submit, create a todo, reset the form, and display the todos
    e.preventDefault();
    const data = new FormData(todoForm);
    await createTodo(data.get('todo'));
    displayTodos();
    todoForm.reset();
});

async function displayTodos() {
    todosEl.textContent = '';
    const todos = await getTodos();
    todos.forEach(element => {
        const div = renderTodo(element);
        div.addEventListener('click', async() => {
            await completeTodo(element.id);
            displayTodos();
        });
        todosEl.append(div);    
    });
}

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    await deleteAllTodos();
    displayTodos();
});
displayTodos();