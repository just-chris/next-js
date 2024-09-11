import React from 'react'
import AddTask from './components/AddTask/page'
import TodoList from './components/Todo/TodoList'
import { getTasks } from '@/api/api'

type Props = {}

const Home =  async (props: Props) => {

  const tasks = await getTasks()
  console.log(tasks)
  return (
    <main className='w-2/6 max-w-4xl mx-auto mt-4'>
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">To-Do App</h1>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
    </main>
  )
}

export default Home