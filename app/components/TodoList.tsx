import { ITask } from '@/types/tasks';
import React from 'react';
import Task from './Task';
interface TodoListProps {
    tasks: ITask[];
}
const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div>
            <table className='w-full'>
                <thead>
                    <tr className='bg-slate-200'>
                        <th className='border-b-2 p-3 text-left border-gray-200'></th>
                        <th className='border-b-2 p-3 text-left border-gray-200'>Taks</th>
                        <th className='border-b-2 p-3 text-left border-gray-200'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />))}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;
