import { ITask } from '@/types/tasks'

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps>= ({ task }) => {
  return (
    <tr key={task.id}>
    <td className='border-b-2 p-3 text-left border-gray-200'>{task.text}</td>
    <td className='border-b-2 p-3 text-left border-gray-200'>do this</td>
</tr>
  )
} 

export default Task