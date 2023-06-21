'use client'
import { ITask } from '@/types/tasks';
import { updateChacked, handleUpdateTodo, deleteTodo } from '@/api';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Model from './Model';

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const route = useRouter();
  const [checked, setChecked] = useState(task.checked);
  const [editMode, setEditMode] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleCheckboxChange = async () => {
    const updatedTask = { ...task, checked: !checked };
    setChecked(!checked);
    await updateChacked(updatedTask);
    route.refresh();
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    route.refresh();
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdate = async () => {
    const updatedTask = { ...task, text: updatedText };
    await handleUpdateTodo(updatedTask);
    setEditMode(false);
    route.refresh();
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setUpdatedText(task.text);
  };

  return (
    <><tr key={task.id}>
      <td className='border-b-2 p-3 text-left border-gray-200'>
        <input
          type='checkbox'
          className={`form-checkbox h-5 w-5 text-gray-600 ${task.checked ? 'checked' : ''}`}
          checked={task.checked}
          onChange={handleCheckboxChange} />
      </td>
      <td className={`border-b-2 p-3 text-left border-gray-200 ${task.checked ? 'line-through' : ''}`}>
        {editMode ? (
          <input
            type='text'
            className='w-full border-2 border-gray-200 rounded-md p-2'
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)} />
        ) : (
          task.text
        )}
      </td>
      <td className='border-b-2 p-3 text-left border-gray-200  space-x-4'>
        {editMode ? (
          <>
            <button type='submit' className='font text-2xl text-blue-500' onClick={handleUpdate}>
              Save
            </button>
            <button className='font text-2xl text-gray-500' onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className='font text-2xl text-blue-500' onClick={handleEdit}>
              <AiOutlineEdit />
            </button>
            {task.checked && (
              <button className='font text-2xl text-red-600' onClick={() => handleDelete(task.id)}>
                <RiDeleteBin6Line />
              </button>
            )}
          </>
        )}
      </td>
    </tr>

      </>
  );
};

export default Task;
