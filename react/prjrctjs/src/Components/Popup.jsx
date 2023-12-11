import React, { useState } from 'react';
import AddProf from './Addprof'; // import your AddProf component

export default function Popup() {
//   const [showAddProf, setShowAddProf] = useState(false);

  return (
    <div>
      {/* <button onClick={() => setShowAddProf(true)}>Add profile</button> */}
         <AddProf/>
    
    </div>
  );
}
