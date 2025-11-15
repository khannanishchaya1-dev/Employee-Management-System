import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='screen flex justify-between gap-5'>
      <div className='mt-10 rounded-xl h-40 w-[45%] py-5 px-10 bg-red-500'>
        <h1 className='text-3xl font-semibold'>2</h1>
        <h1 className='text-2xl font-medium'>New Task</h1>
      </div>
      <div className='mt-10 rounded-xl h-40 w-[45%] py-5 px-10 bg-blue-500'>
        <h1 className='text-3xl font-semibold'>8</h1>
        <h1 className='text-2xl font-medium'>Completed Task</h1>
      </div>
      <div className='mt-10 rounded-xl h-40 w-[45%] py-5 px-10 bg-green-500'>
        <h1 className='text-3xl font-semibold'>6</h1>
        <h1 className='text-2xl font-medium'>Accepted Task</h1>
      </div>
      <div className='mt-10 rounded-xl h-40 w-[45%] py-5 px-10 bg-yellow-500'>
        <h1 className='text-3xl font-semibold'>1</h1>
        <h1 className='text-2xl font-medium'>Failed Task</h1>
      </div>
    </div>
  )
}

export default TaskListNumbers