export function renderTodo(todo) {
    // create a div and a p tag
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    const div = document.createElement('div');

    (todo.completed) ? div.classList.add('complete') : div.classList.add('incomplete');
    div.classList.add('todo');

    const p = document.createElement('p');
    // add the 'todo' css class no matter what
    p.textContent = todo.todo;
    // put the todo's text into the p tag
    div.append(p);
    // append stuff
    return div;
    // return the div
}