'use client'
import { ITask } from '@/types/tasks';
import React, { useState } from 'react';
import Task from './Task';
import { AiOutlineSearch } from 'react-icons/ai'

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (filterType: string) => {
    setFilter(filterType);
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = filter === 'active'
    ? tasks.filter(task => !task.checked)
    : filter === 'completed'
    ? tasks.filter(task => task.checked)
    : tasks;

  const searchedTasks = filteredTasks.filter(task =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log('TodoList.tsx: TodoList: tasks: ', filteredTasks);


  return (
    
    <div>
      <div className=' flex search pb-3 float-right w-1/2'>
        <input
          type='text'
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder='Search tasks...'
          className='border border-gray-200 rounded-md p-2 w-full'
        />
      </div>
      <table className='w-full'>
        <thead>
          <tr className='bg-slate-200'>
            <th className='border-b-2 p-3 text-left border-gray-200'></th>
            <th className='border-b-2 p-3 text-left border-gray-200'>Task</th>
            <th className='border-b-2 p-3 text-left border-gray-200'>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchedTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
      <div className='w-full flex bg-slate-100 justify-between p-3'>
        <h3 className=''>{searchedTasks.length == 0 ? 'No Task found': searchedTasks.length <= 1 ? searchedTasks.length + ' Task' : searchedTasks.length + ' Tasks'}</h3>
        <div>
          <button
            className={`mr-16 ${filter === 'all' ? 'active text-blue-500' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button
            className={`mr-16 ${filter === 'active' ? 'active text-blue-500' : ''}`}
            onClick={() => handleFilterChange('active')}
          >
            Active
          </button>
          <button
            className={`mr-16 ${filter === 'completed' ? 'active text-blue-500' : ''}`}
            onClick={() => handleFilterChange('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
