import React, { useState } from 'react';
import Mbox from './Mbox';
import Dashboard from './Dashboard'; // Import your Modal component
import profile from './Assests/member-1.png';
export default function Modal({isModalOpen, onClose,}) {
  const showHideClassName = isModalOpen ? "modal display-block" : "modal display-none";

  return(
    <>
    <div className={showHideClassName}>
      <section className="modal-main">
        {}
        <button type="button" onClick={onClose}>Close</button>
      </section>
    </div>
    </>
  )

    

}