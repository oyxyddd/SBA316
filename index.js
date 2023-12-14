// Cache the element 
const addButton = document.querySelector("button");
console.log(addButton)
const taskInput = document.getElementById("task-input");
const taskList = document.querySelector(".task-list");
const taskTimeList = document.querySelector(".task-time-list"); 
const timeInput = document.getElementById("taskTime");
const allTasks = document.querySelectorAll(".task-list li");

//Add event listener 
addButton.addEventListener("click",addTask);

//Functions Section 
// This function take input task and put it in the task list with a checkbox before eachtask
function addTask(event){
    const taskContent = taskInput.value.trim();
    const taskTime = timeInput.value;

    if (taskContent == ''){
        taskInput.focus();
        return;
    }else{
        const taskHTML = `<input type="checkbox"><label>${taskContent}</label>`
        taskList.appendChild(document.createElement("li")).innerHTML = taskHTML;
        taskTimeList.appendChild(document.createElement("li")).textContent = taskTime;
        taskInput.value = "";
        timeInput.value = "";
        taskInput.focus();
    }

    const allTasks = document.querySelectorAll(".task-list li");
    allTasks.forEach((task) =>{task.addEventListener('change',function(){
        const listItem = task.lastChild;
        const listCheck = task.firstChild;
        console.log(listItem.c);
        console.log(listCheck)
        if (listCheck.checked){
            listItem.classList.add("completed");
        }else{
            listItem.classList.remove("completed") ;
        }
    })
    })

    // console.log(allTasks)
    

}