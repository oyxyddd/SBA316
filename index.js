// Cache the element 
const addButton = document.querySelector("button");
console.log(addButton)
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


//Add event listener 
addButton.addEventListener("click",addTask);

//Functions Section 
function addTask(event){
    const taskContent = taskInput.value.trim();

    if (taskContent == ''){
        taskInput.focus();
        return;
    }else{
        taskList.appendChild(document.createElement("li")).textContent = taskContent;
        taskInput.value = "";
        taskInput.focuse();
    }
}