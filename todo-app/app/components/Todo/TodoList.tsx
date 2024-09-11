import { ITask } from '@/types/tasks'
import React from 'react'
import Task from '../Task/page'

interface TodoListProps  {
 tasks : ITask[]
}

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr >
            <th>Task</th>
            <th>Description</th>
            <th className='flex justify-end' >Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tasks.map((task) => (<Task key={task.id} task={task} />))}
        </tbody>
      </table>
    </div>
  ) 
}

export default TodoList