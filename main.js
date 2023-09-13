const taskInput = document.querySelector('#task');
const form = document.querySelector('form');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-task');


//load all event listeners
loadEventListeners();

function loadEventListeners(){
    //addTask
    form.addEventListener('submit', addTask);
    // remove item from task
    taskList.addEventListener('click', removeTask);

    // clear task
    clearBtn.addEventListener('click', clearTask);
}

//addTask
function addTask(e){
   if(taskInput.value === ''){
    alert('Please Add a Task')
   }

   

//create an element 
  const li = document.createElement('li');
// add a class
li.className = 'list-group-item';
// create a text node and append
li.appendChild(document.createTextNode(taskInput.value));
//create a link
const link = document.createElement('a');
// add class 
link.className = 'delete-item float-right text-primary';
//add a icon
link.innerHTML = '<i class ="fa fa-trash"><i>';
// append link to li
li.appendChild(link);

// append li to ul
taskList.appendChild(li);
    
   taskInput.value = '';

   e.preventDefault();
}

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// clear task
function clearTask(e){
   taskList.innerHTML = '';

//    while(taskList.firstChild){
//     taskList.removeChild(taskList.firstChild);
//    }

e.preventDefault();

}