import React, { useState } from 'react';
import Dashboard from './Dashboard'; // import your AddProf component
import Mbox from './Mbox';
export default function Modal() {
//   const [showAddProf, setShowAddProf] = useState(false);

  return (
    <div style={{borderStyle:"none",outlineStyle:'none'}}>
      {/* <button onClick={() => setShowAddProf(true)}>Add profile</button> */}
        <Mbox/>
       
    </div>
  );
}