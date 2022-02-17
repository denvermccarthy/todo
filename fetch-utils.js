const SUPABASE_URL = 'https://lxifeplqjanpuugbzgyn.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4aWZlcGxxamFucHV1Z2J6Z3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzU0NTEsImV4cCI6MTk2MDAxMTQ1MX0.4hkIbGdYMJ7SzqMSm39JtJRvMyFal0vMXHHWB0APEJw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createTodo(todo) {
    // create a single incomplete todo with the correct 'todo' property for this user in supabase
    const resp = await client.from('todos').insert({ todo: todo });
    return checkError(resp);
}

export async function deleteAllTodos() {
    // delete all todos for this user in supabase
    const response = await client.from('todos').delete().match({ user_id: getUser().id });
    return checkError(response);
}

export async function getTodos() {
    // get all todos for this user from supabase
    const resp = await client.from('todos').select().order('id');
    return checkError(resp);
}

export async function completeTodo(id) {
    // find the and update (set complete to true), the todo that matches the correct id
    const resp = await client.from('todos').update({ complete : true }).match({ id });
    return checkError(resp);
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./todos');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
