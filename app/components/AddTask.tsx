'use client'

import React, { FormEventHandler, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Model from './Model';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid'

const AddTask = () => {
  const router = useRouter();
  const [modelOpen, setModelOpen] = useState(false);
  const [newTodo, setNewTodo] = useState<string>('');

 const handleSubmitTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id:uuidv4(),
      text: newTodo,
      checked: false
    })
    console.log(newTodo);
    setNewTodo('');
    setModelOpen(false);
    router.refresh();
  };


    

  return (
    <div className='w-full'>
      <button onClick={() => setModelOpen(true)} className='btn justify-center border-1 bg-blue-600 hover:bg-blue-700 text-white w-full px-16 flex space-x-3 py-2'>
        <span>Add New Task</span>
        <span className='mt-1'><AiOutlinePlus size={18} /></span>
      </button>
      {modelOpen && <Model modelOpen={modelOpen} setModelOpen={setModelOpen} >
        <form onSubmit={ handleSubmitTodo }>
        <h3 className='model-body text-lg font-bold'>
            Add New Task
          </h3>
          <p className='py-4'>
            <input
             type="text"
              className='w-full border-2 border-gray-200 rounded-md p-2' 
              placeholder='Enter Task'
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
               />
          </p>
          <button type="submit" className='btn justify-center border-1 bg-blue-600 hover:bg-blue-700 text-white w-full px-16 flex space-x-3 py-2'>submit</button>
        </form>
        </Model>}
    </div>
  );
};

export default AddTask;
