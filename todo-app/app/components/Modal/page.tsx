import React, { useState } from 'react'

interface ModalProps {
 modalOpen : boolean
 setModalOpen: (open: boolean) => boolean | void
 children: React.ReactNode

}
const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {

  return (
   <>
    {/* Open the modal using document.getElementById('ID').showModal() method */}
     <dialog id="my_modal_3" className={`modal ${modalOpen ? 'modal-open' : ''}`} >
       <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setModalOpen(false)} >✕</button>
        </form>
      {children}
      </div>
    </dialog>
   </>
  )
}

export default Modal