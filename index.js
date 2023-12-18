const tasks=[
    {
        id:1,
        title:'Do Laundry',
        status:'completed',

    }
]
console.log(tasks.length)
//Render
const render=()=>{
    const taskContainer=document.getElementById('tasks')
    taskContainer.innerHTML=''
    const tasksList=tasks.map(task=>{
        const list=document.createElement('List')
        list.textContent=task.title
        taskContainer.appendChild(list)
    })
    console.log(tasksList)
   
  

}
render()

//Create
const addTasks=()=>{
   const input=document.getElementById('input')
   const inputValue=input.value.trim()
   const newTask={
    id:tasks.length+1,
    title:inputValue,
    status:'pending'
    

   }
   tasks.push(newTask)
   input.value=''
   console.log(tasks)
   render()
}