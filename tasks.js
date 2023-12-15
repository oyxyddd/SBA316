// Cache the element 
const addButton = document.querySelector(".add-button");
const taskInput = document.getElementById("task-input");
const taskList = document.querySelector(".task-list");
const taskTimeList = document.querySelector(".task-time-list"); 
const timeInput = document.getElementById("taskTime");

//Add event listener 
addButton.addEventListener("click",addTask);

//Functions Section 
// This function take input task and put it in the task list with a checkbox before eachtask
function addTask(event){
    const taskContent = taskInput.value.trim();
    const taskTime = timeInput.value;
    console.log(taskTime)

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
        // sort list according to their time 
    }

    const allTasks = document.querySelectorAll(".task-list li");
    allTasks.forEach((task) => {task.addEventListener('change',function(){
        const listItem = task.lastChild;
        const listCheck = task.firstChild;
    
        if (listCheck.checked){
            listItem.classList.add("completed");
            task.classList.add('completed-task')
        }else{
            listItem.classList.remove("completed") ;
        }

        //put completed list to the end of the list 
        const completedTasks = taskList.querySelectorAll(".completed-task");
        completedTasks.forEach(task => {
            taskList.appendChild(task);
        })
    })
    });

}