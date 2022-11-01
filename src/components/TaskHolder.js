import React from 'react'
import Task from './Task'
import data from '../data.json'

const TaskHolder=()=>{
    return (
        <div className='bg-light rounded flex-fill'>
        <p className='text-dark text-start px-2' style={{borderBottom:'1px solid #CCC'}}>Tasks</p>
        <div className='d-flex w-100 justify-content-around'>
            {data.tasks.map(task=><Task {...task}/>)}
        </div>
        </div>
    )
}

export default TaskHolder