import { useState } from 'react'

import './App.css'

function App() {
  const taskLists=[
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
  ]
  
  


  return (
    <>
      <div>
        <input type='text' placeholder='enter tasks'/>
        <button>Add</button>
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
