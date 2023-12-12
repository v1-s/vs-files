import React, { useState } from 'react';
import Mbox from './Mbox';
import Modal from './Modal'; // Import your Modal component
export default function Modal({isModalOpen, onClose,Modala}) {
  const showHideClassName = isModalOpen ? "modal display-block" : "modal display-none";

  return(
    <>
    <div className={showHideClassName}>
      <section className="modal-main">
        {Modal}
        <button type="button" onClick={onClose}>Close</button>
      </section>
    </div>
    </>
  )

    

}