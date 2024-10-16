import { ITask } from "@/types/tasks"

const baseUrl =  'http://localhost:4000'

export const getTasks = async (): Promise<ITask[]> => {
 const res = await fetch(`${baseUrl}/tasks`, {cache: 'no-store'})
 const todos = await res.json()
 return todos
}

export const addTodo = async ( todo:ITask ): Promise<ITask> => {
 const res = await fetch(`${baseUrl}/tasks`, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify(todo)
 } )
 const newTask = await res.json()
 return newTask
}