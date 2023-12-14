// Cache the element 
const addButton = document.querySelector("button");
console.log(addButton)
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskTimeList = document.getElementById("task-time-list"); 
const timeInput = document.getElementById("taskTime");

//Add event listener 
addButton.addEventListener("click",addTask);

//Functions Section 
function addTask(event){
    const taskContent = taskInput.value.trim();
    const taskTime = timeInput.value;

    if (taskContent == ''){
        taskInput.focus();
        return;
    }else{
        taskList.appendChild(document.createElement("li")).textContent = taskContent;
        taskTimeList.appendChild(document.createElement("li")).textContent = taskTime;
        taskInput.value = "";
        taskInput.focuse();
    }


}