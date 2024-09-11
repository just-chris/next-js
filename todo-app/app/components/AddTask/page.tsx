'use client'
import React, { FormEventHandler, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from '../Modal/page';
import { addTodo } from '@/api/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
; // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

type Props = {}

const AddTask = (props: Props) => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskName, setNewTaskName] = useState<string>('');
  const [newTaskDesc, setNewTaskDesc] = useState<string>('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await addTodo ({
      id: uuidv4(),
      name: newTaskName,
      description: newTaskDesc,
    })
    setNewTaskName('')
    setNewTaskDesc('')
    router.refresh()
    setModalOpen(false)

  }
  return (
    <div>
     <button className="btn btn-primary w-full" onClick={() => setModalOpen(true)}>Add Task <AiOutlinePlus className="ml-2" size={18} /> </button>
     <Modal modalOpen={ modalOpen } setModalOpen={ setModalOpen }> 
      <form action="" onSubmit={handleSubmit}>
        <h3 className='font-bold text-lg'>New Task</h3>
        <div className="modal-action flex flex-col gap-4 align-center">
        <input type="text" placeholder="Task..." className="input input-bordered w-full placeholder:text-gray-600" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
        <textarea className="textarea textarea-bordered placeholder:text-gray-600" placeholder="Description..."  value={newTaskDesc} onChange={(e) => setNewTaskDesc(e.target.value)}></textarea>
        {/* <input type="text" placeholder="Description..." className="input input-bordered w-full" /> */}
        <button type='submit' className='btn' >Submit</button>
        </div>
      </form>
     </Modal>
    </div>
  )
}

export default AddTask