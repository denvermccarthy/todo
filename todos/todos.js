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


window.addEventListener('load', async() => {
    
});

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
    // fetch the todos
    const todos = await getTodos();
    // display the list of todos
    todos.forEach(element => {
        const div = renderTodo(element);
        div.addEventListener('click', () => {
            console.log('clicked');
        });
        todosEl.append(div);    
    });
    // be sure to give each todo an event listener

    // on click, complete that todo
}
// add an on load listener that fetches and displays todos on load
window.addEventListener('load', () => {
    displayTodos();
});
logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos

    // then refetch and display the updated list of todos
});
