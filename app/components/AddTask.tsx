import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const AddTask = () => {
  return (
    <div className='w-full'>
        <button className='btn justify-center border-1 bg-blue-600 hover:bg-blue-700 text-white w-full px-16 flex space-x-3 py-2'><span>Add New Task</span> <span className='mt-1'><AiOutlinePlus size={18} /></span>  </button>
    </div> 
  )
}

export default AddTask 