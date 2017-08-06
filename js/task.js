class Task {
    constructor(){
        this.id = 0;
        this.title = '';
        this.status = 99;
        this.numberOfPomodoros = 0;
    }
    
    setTitle(title){
        this.title = title;
        return this;
    };
    setStatus(status){
        this.status = status;
        return this;
    };
};

function createTask(title) {
    const newTask = new Task()
        .setTitle(title);
   
    const allTasks = getAllTasks();

    if( allTasks == null ) {
        newTask.id = 1;
        const ArrayNewTask = [newTask];
        saveTaskList(ArrayNewTask)
    }
    else {    
        const lastIdUsed = allTasks.last().id;
        newTask.id = lastIdUsed + 1;
        allTasks.push(newTask);
        saveTaskList(allTasks)
    }
}

function deleteTask(allTasks,id) {
    allTasks.splice(id, 1);
    return false;  
}


function findTaskId(task) { 
    if(task.id === this[0]){
        return task;
    }
}
    

function getAllTasks() {
  const allTasks = JSON.parse(localStorage.getItem('TASKS_STORAGE'));
  return allTasks;
}

function clearAllTasks() {
  localStorage.clear();
}

function saveTaskList(allTasks){
    localStorage.setItem('TASKS_STORAGE', JSON.stringify(allTasks));
}