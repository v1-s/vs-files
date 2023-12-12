import React, { useState } from 'react';
import Mbox from './Mbox';
import Dashboard from './Dashboard'; // Import your Modal component
export default function Modal({isModalOpen, onClose,Modal}) {
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