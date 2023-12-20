let tasks = [
    {
        id: 1,
        title: 'Do Laundry',
        status: 'completed',
    }
];

console.log(tasks.length);
const changeButton = document.getElementById('button');
let selectedTask = null;

// Render
const render = () => {
    const taskContainer = document.getElementById('tasks');
    taskContainer.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.className = 'list';
        listItem.textContent = task.title;
        taskContainer.appendChild(listItem);

        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.type = 'button';
        editButton.textContent = 'edit';
        editButton.addEventListener('click', () => editTasks(task));
        listItem.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.type = 'button';
        deleteButton.textContent = 'delete';
        deleteButton.addEventListener('click', () => deleteTasks(task.id));
        listItem.appendChild(deleteButton);
    });
};

render();

const input = document.getElementById('input');

const handleClick = () => {
    if (changeButton.textContent === 'Add') {
        addTasks();
    }
};

// Create
const addTasks = () => {
    const inputValue = input.value.trim();
    if (inputValue !== '') {
        const newTask = {
            id: tasks.length + 1,
            title: inputValue,
            status: 'pending'
        };
        tasks.push(newTask);
        input.value = '';
        console.log(tasks);
        render();
    }
};

const deleteTasks = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    render();
    console.log(tasks);
};

const editTasks = (task) => {
    selectedTask = task;
    changeButton.textContent = 'Update';
    changeButton.removeEventListener('click', addTasks);
    changeButton.addEventListener('click', updateTasks);
    input.value = task.title;
};

const updateTasks = () => {
    const inputValue = input.value.trim();
    if (inputValue !== '') {
        tasks = tasks.map(task =>
            task.id === selectedTask.id ? { ...task, title: inputValue } : task
        );
        console.log(tasks);
        render();
    }
    input.value = ''; // Clear the input field
    changeButton.textContent = 'Add';
    changeButton.removeEventListener('click', updateTasks);

    // Reattach the 'addTasks' event listener
    changeButton.addEventListener('click', handleClick);

    selectedTask = null; // Reset selected task
};