const tasks=[
    {
        id:1,
        title:'Do Laundry',
        status:'completed',

    }
]
console.log(tasks.length)

//Create
const addTasks=()=>{
    const input=document.getElementById('input').value.trim()
   const newTask={
    id:tasks.length+1,
    title:input,
    status:'pending'
    

   }
   tasks.push(newTask)
   console.log(tasks)
}