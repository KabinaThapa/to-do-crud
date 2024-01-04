import { useState } from 'react'

import './App.css'

function App() {
  const[input, setInput]=useState('')
  const [taskLists, setTaskLists]=useState([
    {
      id:1,
      title:'do laundry',
      status:'completed'
    },
    {
      id:2,
      title:'grocery',
      status:'completed'
    }
  ])
  const addTasks=()=>{
    const newTask={
      id:taskLists.length +1,
      title: input,
      status:'pending'

    }
    taskLists.push(newTask)
    console.log(taskLists)
    setTaskLists([...taskLists])

  }

  const handleInput=(event)=>{
    setInput(event.target.value)

  }
  const handleDelete=(id)=>{
   const afterDelete= taskLists.filter((lists)=>lists.id!=id)
    setTaskLists(afterDelete)


  }
  


  return (
    <>
      <div>
        <input type='text' placeholder='enter tasks' onChange={handleInput} value={input}/>
        <button onClick={addTasks}>Add</button>
        <div>
          {taskLists.map((tasks)=>(
            <div>
              <li>{tasks.title}</li>
              <button onClick={()=>handleDelete(tasks.id)}>X</button>
            </div>
            
          ))}
        </div>
      </div>
    </>
  )
}

export default App
