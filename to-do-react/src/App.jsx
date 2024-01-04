import { useState } from 'react'

import './App.css'

function App() {
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
      title: 'title',
      status:'pending'

    }
    taskLists.push(newTask)
    console.log(taskLists)
    setTaskLists((prevTaskLists)=>[...taskLists])

  }
  
  


  return (
    <>
      <div>
        <input type='text' placeholder='enter tasks'/>
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
