// Declare variables for the ui

const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.list-group');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-task');


// load event listeners
loadEventListeners();

function loadEventListeners(){
    // Dom load event
    document.addEventListener('DOMContentLoaded', getTask);
    // Add Task Event
    form.addEventListener('submit', addTask);
    // Remove Task Event
    tasklist.addEventListener('click', removeTask);
    // clear Task Event
    clearBtn.addEventListener('click', clearTask);
    // Filter
    filter.addEventListener('keyup', filterTask);
}
// get Task
function getTask(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // create a text node and append
    li.appendChild(document.createTextNode(task));
    // create a link
    const link = document.createElement('a');
    // add classname
    link.className = 'delete-item float-right';
    // add icon
    link.innerHTML = '<i class="fas fa-trash"</i>';
    // append the link to the li
    li.appendChild(link);
    // append the li to ul
    tasklist.appendChild(li);
    })
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
    }
    // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // create a text node and append
    li.appendChild(document.createTextNode(taskInput.value));
    // create a link
    const link = document.createElement('a');
    // add classname
    link.className = 'delete-item float-right';
    // add icon
    link.innerHTML = '<i class="fas fa-trash"</i>';
    // append the link to the li
    li.appendChild(link);
    // append the li to ul
    tasklist.appendChild(li);
    // store in LS
    storeTaskInLocalStorage(taskInput.value)
    // clear the input
    taskInput.value = '';

    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?')){
    e.target.parentElement.parentElement.remove();
        }
    }
    // remove from LS
    removeTaskInLocalStorage(e.target.parentElement.parentElement)
}

function removeTaskInLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Clear Task
function clearTask(){
    // tasklist.innerHTML = '';

    // Faster
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild)
    }

    // clear Task fro LS
    cleartaskInLocalStorage();
}

function cleartaskInLocalStorage(){
    localStorage.clear();
}


// Filter Task
function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.list-group-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else {
            task.style.display = 'none';
        }
    })
}


