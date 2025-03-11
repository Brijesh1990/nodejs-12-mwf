// create a DOM ....
const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
const addBtn=document.getElementById("addBtn");
// create addEventListener
addBtn.addEventListener("click",function(){
    const taskText=taskInput.value.trim();
    if(taskText!=="")
    {
        addTask(taskText); //addTask is a function
        taskInput.value="";//cleared the inputData  
    }
    else 
    {
        Swal.fire({
            title: "Oh!",
            text: "I think your task Input is Blank",
            icon: "error"
          }); 
    }

})

// create a function addTask to insert data in task
function addTask(taskText)
{
    const li=document.createElement("li");
    li.innerHTML=`${taskText} <button onclick="deleteTask(this)">Remove</button>`;
    // insert data or append data...
    taskList.appendChild(li);
    Swal.fire({
        title: "Good!",
        text: "Your task successfully added!",
        icon: "success"
      });

}

// create a function for delete task

function deleteTask(button)
{
  const li=button.parentElement;
  taskList.removeChild(li);
  Swal.fire({
    title: "Oh!",
    text: "Your task successfully Deleted!",
    icon: "error"
  });
}