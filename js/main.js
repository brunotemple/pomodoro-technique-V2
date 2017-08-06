function init() {
    const runningTask = false;
    refreshTaskList();

    // Add button function
    document.getElementById('addButton').addEventListener('click', function(){
        const title = document.getElementById('inputNewTask').value;

        createTask(title);
        document.getElementById('inputNewTask').value = '';
        refreshTaskList();
        return false;
    });
  

    // Clear button function
    document.getElementById('clearAllButton').addEventListener('click', function(){
        if(checkTaskRunning()){
            return;
        }
        clearAllTasks();
        refreshTaskList();
    });

    //resetTasksAll();
}



function resetTasksAll(){
    const allTasks = getAllTasks()
    allTasks.forEach(function(element) {
        element.status = 99;
    }, this);
    saveTaskList(allTasks);
}



function editTaskName(id){
    const allTasks = getAllTasks()
    const task = allTasks.find(findTaskId,[getTaskId(id)]);
    document.getElementById('inputNewTask').value = task.title;
    document.getElementById('addButton').classList.add('hide');
    document.getElementById('editButton').classList.remove('hide');
    document.getElementById('editButton').addEventListener('click', function(){
        task.title = document.getElementById('inputNewTask').value;
        saveTaskList(allTasks);
        document.getElementById('inputNewTask').value = '';
        refreshTaskList();
        document.getElementById('addButton').classList.remove('hide');
        document.getElementById('editButton').classList.add('hide');
        return false;
    });
}

function runTask(id){
    timerManager(id);
    hideButtons();
}

function hideButtons(){
    var allButtons = [];
    allButtons = document.getElementsByClassName('listButton');   
    for (i = 0; i < allButtons.length; i++){
        allButtons[i].classList.add('hide');
    }
}

function checkBoxChange(id){
    if(checkTaskRunning()){
        if(id.checked){
            id.checked = false;
        }
        else{
            id.checked = true;
        }
        return;
    }
    var allTasks = getAllTasks();
    const task = allTasks.find(findTaskId,[getTaskId(id)]);
    if(id.checked){
        task.status = 2;
    }
    else{       
        if (task.numberOfPomodoros > 0){
            task.status = 0;
        }
        else{
            task.status = 99;
        }
    }
    saveTaskList(allTasks);
    refreshTaskList();
}


function getTaskId(id){
    var taskId = Number(id.closest("li").id);
    return taskId;
}


function deleteTaskbyId(id){
    var allTasks = getAllTasks();
    const task = allTasks.find(findTaskId,[getTaskId(id)]);
    allTasks = allTasks.filter(function(item){
        return item.id !== task.id;
    });
    saveTaskList(allTasks);
    refreshTaskList();
}


function refreshTaskList () {
  const allTasks = getAllTasks();
  document.getElementById("taskList").innerHTML = '';
  var filter = checkFilter();
  if (allTasks !== null)
  {
    for (var i = 0; i < allTasks.length; i++) {

        if(allTasks[i].status == 2 && filter != 2){
            itemList = htmlListCompleted(allTasks[i]);
        }
        else if(allTasks[i].status == 1){
            itemList = htmlListRunning(allTasks[i]);
        }
        else if(allTasks[i].status != 2 && filter != 1){
            itemList = htmlListDefault(allTasks[i]);
        }
        
        document.getElementById("taskList").innerHTML += itemList;
        itemList = '';
    }
  }
}


function checkFilter(){
    return filterStatus(document.getElementsByClassName('btn-filter btn-success')[0].id);    
}


function filter(id){
    var buttonFilter = document.getElementsByClassName('btn-filter');
    for(i = 0; i < buttonFilter.length; i++){
        buttonFilter[i].classList.remove('btn-success');
        buttonFilter[i].classList.add('btn-filter-outline');
    }
    id.classList.add('btn-success');
    id.classList.remove('btn-filter-outline');
    
    refreshTaskList();
}


function timerManager(id){
    const allTasks = getAllTasks();
    const task = allTasks.find(findTaskId,[getTaskId(id)]);

    task.status = 1;
    saveTaskList(allTasks);
    refreshTaskList();
    
     
    // set timer for 25 minutes
    //const pomodoroTime = 25 * 60000;
    const pomodoroTime = 25000;
     

    initializeTimer(new Date(Date.parse(new Date()) + pomodoroTime));
    
    setTimeout(resetTimer,pomodoroTime + 500);
    function resetTimer(){
        task.status = 3;
        task.numberOfPomodoros = task.numberOfPomodoros + 1;
        saveTaskList(allTasks);

        document.getElementById('currentStatusRunning').innerHTML = 'Resting';
        
        playSound();

        // set timer for 5 minutes
        //var restTime = 5 * 60000;
        var restTime = 5000;
            
        if((task.numberOfPomodoros % 4) == 0){
            // set timer for 15 minutes
            //restTime = 15 * 60000;
            restTime = 15000;
        } 

        initializeTimer(new Date(Date.parse(new Date()) + restTime));

        setTimeout(endTimer,restTime + 500);
        function endTimer(){
            task.status = 0;
            saveTaskList(allTasks);
            refreshTaskList();
            playSound();
        }
    }

}

function playSound() {
    var audio = document.getElementById("beep");
    audio.play();
}

function checkTaskRunning() {
    var item = document.getElementById('currentStatusRunning');
    if(item){
        return true;
    }
    return false;
}





