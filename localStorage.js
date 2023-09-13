//set item to local Storage
// localStorage.setItem('Name', 'David');
// localStorage.setItem('age', '30');

//session Storage
// sessionStorage.setItem('Name', 'Kunle');

//remove local storage
// localStorage.removeItem('Name');

//get item on the local storage
// const name = localStorage.getItem('Name');
// const age = localStorage.getItem('age');


//clear from local storage
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
    
    const task = document.getElementById('task').value;
    // localStorage.setItem('Tasks', tasks);
    
    

    let tasks;

    if (localStorage.getItem('task')=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('task'))
    }

  tasks.push(task);

  localStorage.setItem('task', JSON.stringify(tasks));
  alert('Task Successfully Saved');

    e.preventDefault();
})

let tasks = JSON.parse(localStorage.getItem('task'));

tasks.forEach(function(task){
    console.log(task);
})


