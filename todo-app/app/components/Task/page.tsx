'use client'
import { ITask } from "@/types/tasks"
import { useState } from "react"
import { FiEdit } from "react-icons/fi"
import { FiTrash2 } from "react-icons/fi"
import Modal from '../Modal/page';

interface TaskProps {
 task: ITask
}
const Task:React.FC<TaskProps> = ({task}) => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const handleSubmitEdit =  async (e:any) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
   <tr key={task.id}>
    <td className="w-2/6" >{task.name}</td>
    <td className="w-2/6" >{task.description}</td>
    <td className="w-full flex justify-end gap-2" > 
      <FiEdit className="text-xl cursor-pointer" onClick={(e) => {setOpenModalEdit(true)}} /> 
      <Modal modalOpen={ openModalEdit } setModalOpen={ setOpenModalEdit }> 
        <form action="" onSubmit={handleSubmitEdit}>
          <h3 className='font-bold text-lg'>Edit Task - ['taskName']</h3>
          <div className="modal-action flex flex-col gap-4 align-center">
          <input type="text" placeholder="Task..." className="input input-bordered w-full placeholder:text-gray-600" />
          <textarea className="textarea textarea-bordered placeholder:text-gray-600" placeholder="Description..." ></textarea>
          {/* <input type="text" placeholder="Description..." className="input input-bordered w-full" /> */}
          <button type='submit' className='btn' >Submit</button>
          </div>
        </form>
      </Modal>
      <FiTrash2 className="text-xl text-red-300 cursor-pointer" onClick={(e) => {console.log(e.target)}} /> 
    </td>
    
  </tr>
  )
}

export default Task