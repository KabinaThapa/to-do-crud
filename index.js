let tasks=[
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
        const list=document.createElement('list')
        list.className='list'
        list.textContent=task.title
        taskContainer.appendChild(list)

        const editButton=document.createElement('edit')
        editButton.className='edit'
        editButton.type='button'
        editButton.textContent='edit'
        list.appendChild(editButton)
        
        const deleteButton=document.createElement('delete')
        deleteButton.className='edit'
        deleteButton.type='button'
        deleteButton.textContent='delete'
        deleteButton.addEventListener('click', ()=>deleteTasks(task.id))
        list.appendChild(deleteButton)

    })
   
   
  

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
const deleteTasks=(id)=>{
tasks=tasks.filter(task=>task.id!==id)
render()
console.log(tasks)

}