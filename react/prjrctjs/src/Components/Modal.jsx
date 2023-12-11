import React, { useState } from 'react';
import Dashboard from './Dashboard'; // Import your Modal component
import profile from './Assests/member-1.png';
export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
    <div className='grt' onClick={(e) => e.stopPropagation()}>
        <li>Profile</li>
        <li>Settings</li>
        <li>
            Logout
        </li>
    </div>
      
      {isOpen && (
        <Modal onClose={handleClose}>
                <div className='grt'>
        <li>Profile</li>
        <li>Settings</li>
        <li>
            Logout
        </li>
    </div>
        </Modal>
      )}
    </div>
  );
}

