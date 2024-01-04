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
    setTaskLists((prevTaskLists)=>[...taskLists])

  }

  const handleInput=(event)=>{
    setInput(event.target.value)

  }
  
  


  return (
    <>
      <div>
        <input type='text' placeholder='enter tasks' onChange={handleInput} value={input}/>
        <button onClick={addTasks}>Add</button>
        <div>
          {taskLists.map((tasks)=>(
            <li>{tasks.title}</li>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
