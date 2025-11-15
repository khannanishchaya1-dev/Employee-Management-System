import React from 'react'
import logo from '../../assets/logo.svg';

const HEADER = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold'>Hello <br /><span className='text-3xl font-semibold'>Nishchaya 👋</span></h1>
      <img src={logo} alt="Logo" className='h-18' />
      <button className=' border-none bg-red-500 rounded-xl text-white text-lg px-4 py-2 hover:bg-red-400'>Log Out</button>
    </div>
  )
}

export default HEADER