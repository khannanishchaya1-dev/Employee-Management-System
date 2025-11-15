import React from 'react'
import HEADER from '../others/HEADER'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-8 bg-[#1C1C1C] h-screen'>
      <HEADER></HEADER>
      <TaskListNumbers></TaskListNumbers>
      <TaskList></TaskList>
    </div>
  )
}

export default EmployeeDashboard