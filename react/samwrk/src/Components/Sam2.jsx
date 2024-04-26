// import React, { useState } from 'react';
// import "../Components/Sam2.css";

// const UserDashboard = () => {
//   const [userType, setUserType] = useState('');
//   const [accessServiceOptions, setAccessServiceOptions] = useState(['create', 'read', 'update', 'delete']);
//   const [operation, setOperation] = useState('');
//   const [operationdone, setOperationDone] = useState('');
//   const [submittedData, setSubmittedData] = useState([]);
//   const [createInput, setCreateInput] = useState('');
//   const [readInput, setReadInput]= useState('');
//   const [updateInput, setUpdateInput] = useState('');
//   const [deleteInput, setDeleteInput] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmittedData([
//       ...submittedData,
//       {
//         userType,
//         accessServiceOptions: accessServiceOptions.join(', '),
//         operation,
//         createInput,
//         readInput,
//         updateInput,
//         deleteInput: operation === 'delete' ? deleteInput : null,
//       },
//     ]);
//     setUserType('');
//     setAccessServiceOptions([]);
//     setOperation('');
//     setOperationDone('');
//     setCreateInput('');
//     setReadInput('');
//     setUpdateInput('');
//   };

//   const handleUserTypeChange = (event) => {
//     setUserType(event.target.value);
//     setAccessServiceOptions([]);

//     switch (event.target.value) {
//       case 'admin':
//         setAccessServiceOptions(['create', 'read', 'delete', 'update']);
//         break;
//       case 'user':
//       case 'student':
//       case 'office':
//         setAccessServiceOptions(['create', 'read', 'update']);
//         break;
//       default:
//         setAccessServiceOptions([]);
//     }
//   };

//   const handleAccessServiceChange = (event) => {
//     const newOptions = Array.from(event.target.selectedOptions, (option) => option.value);

//     if (userType === 'admin') {
//       setAccessServiceOptions(newOptions);
//     } else {
//       const updatedOptions = newOptions.filter((option) => option !== 'delete');
//       setAccessServiceOptions(updatedOptions);
//     }
//   };

//   const handleOperationChange = (event) => {
//     setOperation(event.target.value);
//   };

//   const handleOperationDone = (event) => {
//     setOperationDone(event.target.value);
//   };

//   const renderInputField = (operation) => {
//     let createFields;
//     if (userType === 'admin' || userType === 'user') {
//       if (operation === 'create') {
//         createFields = (
//           <>
//             <input
//               type="text"
//               value={createInput}
//               placeholder="Enter data to create"
//               onChange={(e) => setCreateInput(e.target.value)}
//               readOnly={operation !== 'create'}
//             />
//             <input
//               type="text"
//               value={readInput}
//               placeholder="Enter data to read (ID, etc.)"
//               onChange={(e) => setReadInput(e.target.value)}
//               readOnly={operation !== 'read'}
//             />
//             <input
//               type="text"
//               value={updateInput}
//               placeholder="Enter data to update (ID, field-value pairs)"
//               onChange={(e) => setUpdateInput(e.target.value)}
//               readOnly={operation !== 'update'}
//             />
//           </>
//         );
//       } else {
//         createFields = <input type="hidden" />;
//       }
//     } else {
//       createFields = <input type="hidden" />;
//     }

//     switch (operation) {
//       case 'create':
//         return createFields;
//       case 'read':
//         return (
//           <input
//             type="text"
//             value={readInput}
//             placeholder="Enter data to read (ID, etc.)"
//             onChange={(e) => setReadInput(e.target.value)}
//             readOnly={operation !== 'read'}
//           />
//         );
//       case 'update':
//         return (
//           <input
//             type="text"
//             value={updateInput}
//             placeholder="Enter data to update (ID, field-value pairs)"
//             onChange={(e) => setUpdateInput(e.target.value)}
//             readOnly={operation !== 'update'}
//           />
//         );
//       case 'delete':
//         return (
//           <>
//             <input type="text" placeholder="Enter ID of record to delete" onChange={(e) => setDeleteInput(e.target.value)} />
//             <button type="button" onClick={() => deleteRecord(deleteInput)}>
//               Delete Record
//             </button>
//           </>
//         );
//       default:
//         return null;
//     }
// };

//   const deleteRecord = (id) => {
//     setSubmittedData(submittedData.filter((data) => data.id !== id));
//   };

//   return (
//     <>
//       <h2>User Dashboard</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           User Type:
//           <select value={userType} onChange={handleUserTypeChange}>
//             <option value="">Select</option>
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//             <option value="student">Student</option>
//             <option value="office">Office</option>
//           </select>
//         </label>
//         {accessServiceOptions.length > 0 && (
//           <div>
//             <p>Access Service Options:</p>
//             <ul>
//               {accessServiceOptions.map((option, index) => (
//                 <li key={index}>{option}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//         <label>
//           Operation:
//           <input
//             type="text"
//             value={operation}
//             onChange={(event) => setOperation(event.target.value)}
//           />
//         </label>
//         <label>
//           Operation Done:
//           <input
//             type="text"
//             value={operationdone}
//             onChange={(event) => setOperationDone(event.target.value)}
//           />
//         </label>
//         {renderInputField(operation)}
//         <button type="submit">Submit</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>User Type</th>
//             <th>Access Service Options</th>
//             <th>Operation</th>
//             <th>Operation Done</th>
//             <th>Create Input</th>
//             <th>Read Input</th>
//             <th>Update Input</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedData.map((data, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{data.userType}</td>
//               <td>{data.accessServiceOptions}</td>
//               <td>{data.operation}</td>
//               <td>{data.operationdone}</td>
//               <td>{data.createInput}</td>
//               <td>{data.readInput}</td>
//               <td>{data.updateInput}</td>
//               <td>
//                 {data.userType === 'admin' ? (
//                   <button onClick={() => deleteRecord(index)}>Delete</button>
//                 ) : null}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default UserDashboard;

























import React, { useState } from 'react';
import "../Components/Sam2.css";

const UserDashboard = () => {
  const [userType, setUserType] = useState('');
  const [accessServiceOptions, setAccessServiceOptions] = useState(['create', 'read', 'update', 'delete']);
  const [operation, setOperation] = useState('');
  const [operationdone, setOperationDone] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [createInput, setCreateInput] = useState('');
  const [readInput, setReadInput] = useState('');
  const [updateInput, setUpdateInput] = useState('');
  const [deleteInput, setDeleteInput] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([
      ...submittedData,
      {
        userType,
        accessServiceOptions: accessServiceOptions.join(', '),
        operation,
        // For create: createInput
        createInput,
        // For read: readInput
        readInput,
        // For update: updateInput
        updateInput,
        // For delete: deleteInput (if applicable)
        deleteInput: operation === 'delete' ? deleteInput : null,
      },
    ]);
    setUserType('');
    setAccessServiceOptions([]);
    setOperation('');
    setOperationDone('');
    setCreateInput('');
    setReadInput('');
    setUpdateInput('');
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    setAccessServiceOptions([]);

    switch (event.target.value) {
      case 'admin':
        setAccessServiceOptions(['create', 'read', 'delete', 'update']);
        break;
      case 'user':
      case 'student':
      case 'office':
        setAccessServiceOptions(['create', 'read', 'update']);
        break;
      default:
        setAccessServiceOptions([]);
    }
  };

  const handleAccessServiceChange = (event) => {
    const newOptions = Array.from(event.target.selectedOptions, (option) => option.value);
  
    if (userType === 'admin') {
      setAccessServiceOptions(newOptions);
    } else {
      const updatedOptions = newOptions.filter((option) => option !== 'delete');
      setAccessServiceOptions(updatedOptions);
    }
  };
  
const handleOperationChange = (event) => {
  setOperation(event.target.value);
};
const handleOperationDone = (event) => {
  setOperationDone(event.target.value);



  const renderInputField = (operation) => {
    let createFields;
    if (userType === 'admin' || userType === 'user') {
      if (operation === 'create') {
        createFields = (
          <>
            <input
              type="text"
              value={createInput}
              placeholder="Enter data to create"
              onChange={(e) => setCreateInput(e.target.value)}
            />
            <input
              type="text"
              value={readInput}
              placeholder="Enter data to read (ID, etc.)"
              onChange={(e) => setReadInput(e.target.value)}
            />
            <input
              type="text"
              value={updateInput}
              placeholder="Enter data to update (ID, field-value pairs)"
              onChange={(e) => setUpdateInput(e.target.value)}
            />
          </>
        );
      } else {
        createFields = <input type="hidden" />;
      }
    } else {
      createFields = <input type="hidden" />;
    }
  
    switch (operation) {
      case 'create':
        return createFields;
      case 'read':
        return (
          <input
            type="text"
            value={readInput}
            placeholder="Enter data to read (ID, etc.)"
            onChange={(e) => setReadInput(e.target.value)}
          />
        );
      case 'update':
        return (
          <input
            type="text"
            value={updateInput}
            placeholder="Enter data to update (ID, field-value pairs)"
            onChange={(e) => setUpdateInput(e.target.value)}
          />
        );
      case 'delete':
        return (
          <>
            <input type="text" placeholder="Enter ID of record to delete" onChange={(e) => setDeleteInput(e.target.value)} />
            <button type="button" onClick={() => deleteRecord(deleteInput)}>
              Delete Record
            </button>
          </>
        );
      default:
        return null;
    }
  };
};
// const renderInputField = (operation) => {
//   switch (operation) {
//     case 'create':
//       if (userType === 'admin') {
//         return (
//           <>
//             <input
//               type="text"
//               value={createInput}
//               placeholder="Enter data to create"
//               onChange={(e) => setCreateInput(e.target.value)}
//             />
//             <input
//               type="text"
//               value={readInput}
//               placeholder="Enter data to read (ID, etc.)"
//               onChange={(e) => setReadInput(e.target.value)}
//             />
//             <input
//               type="text"
//               value={updateInput}
//               placeholder="Enter data to update (ID, field-value pairs)"
//               onChange={(e) => setUpdateInput(e.target.value)}
//             />
//           </>
//         );
//       } else {
//         return (
//           <input
//             type="text"
//             value={createInput}
//             placeholder="Enter data to create"
//             onChange={(e) => setCreateInput(e.target.value)}
//           />
//         );
//       }
//     case 'read':
//       return (
//         <input
//           type="text"
//           value={readInput}
//           placeholder="Enter data to read (ID, etc.)"
//           onChange={(e) => setReadInput(e.target.value)}
//         />
//       );
//     case 'update':
//       return (
//         <input
//           type="text"
//           value={updateInput}
//           placeholder="Enter data to update (ID, field-value pairs)"
//           onChange={(e) => setUpdateInput(e.target.value)}
//         />
//       );
//     case 'delete':
//       return (
//         <>
//           <input type="text" placeholder="Enter ID of record to delete" onChange={(e) => setDeleteInput(e.target.value)} />
//           <button type="button" onClick={() => deleteRecord(deleteInput)}>
//             Delete Record
//           </button>
//         </>
//       );
//     default:
//       return null;
//   }
// };

const deleteRecord = (id) => {
  setSubmittedData(submittedData.filter(data => data.id !== id));
};

return (
  <>
    <h2>User Dashboard</h2>
    <form onSubmit={handleSubmit}>
      <label>
        User Type:
        <select value={userType} onChange={handleUserTypeChange}>
          <option value="">Select</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="student">Student</option>
          <option value="office">Office</option>
        </select>
      </label>
      {accessServiceOptions.length > 0 && (
        <div>
          <p>Access Service Options:</p>
          <ul>
            {accessServiceOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}
      <label>
        Operation:
        <input
          type="text"
          value={operation}
          onChange={(event) => setOperation(event.target.value)}
        />
      </label>
      <label>
        Operation Done:
        <input
          type="text"
          value={operationdone}
          onChange={(event) => setOperationDone(event.target.value)}
        />
      </label>
      <label>
        Create Input:
        <input
          type="text"
          value={createInput}
          onChange={(event) => setCreateInput(event.target.value)}
        />
      </label>
      <label>
        Read Input:
        <input
          type="text"
          value={readInput}
          onChange={(event) => setReadInput(event.target.value)}
        />
      </label>
      <label>
        Update Input:
        <input
          type="text"
          value={updateInput}
          onChange={(event) => setUpdateInput(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User Type</th>
          <th>Access Service Options</th>
          <th>Operation</th>
          <th>Operation Done</th>
          <th>Create Input</th>
          <th>Read Input</th>
          <th>Update Input</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {submittedData.map((data) => (
  <tr key={data.id}>
    <td>{data.id}</td>
    <td>{data.userType}</td>
    <td>{data.accessServiceOptions}</td>
    <td>{data.operation}</td>
    <td>{data.operationdone}</td>
    {data.operation === 'create'? (
                <td>{data.createInput}</td>
              ) : (
                <td>-</td>
              )}
              {data.operation === 'read'? (
                <td>{data.readInput}</td>
              ) : (
                <td>-</td>
              )}
              {data.operation === 'update'? (
                <td>{data.updateInput}</td>
              ) : (
                <td>-</td>
              )}
   
    <td>
      {data.userType === 'admin' ? (
        <button onClick={() => deleteRecord(data.id)}>Delete</button>
      ) : null}
    </td>
  </tr>
))}
      </tbody>
    </table>
  </>
);
}
export default UserDashboard;



 {/* <td>{data.createInput}</td>
    <td>{data.readInput}</td>
    <td>{data.updateInput}</td> */}

// <td>
//   {data.userType === 'admin' || data.userType === 'user' ? (
//     <button onClick={() => handleReadOperation(data.id)}>Read</button>
//   ) : null}
// </td>
// const handleAccessServiceChange = (event) => {
    // setAccessServiceOptions(
    //   userType === 'admin'
    //     ? Array.from(event.target.selectedOptions, (option) => option.value)
    //     : Array.from(event.target.selectedOptions, (option) =>
    //       option.value !== 'delete' ? option.value : null
    //     ).filter(Boolean)
    // );
//     const newOptions = [...accessServiceOptions];

//     if (event.target.checked) {
//       newOptions.push(event.target.value);
//     } else {
//       newOptions.splice(newOptions.indexOf(event.target.value), 1);
//     }

//     setAccessServiceOptions(newOptions);
//   };
// };

//   return (

//     <>
//     <div className="user-dashboard">
//       <h1>User Dashboard</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="userType">User Type</label>
//           <input
//             type="text"
//             id="userType"
//             value={userType}
//             placeholder="Enter the User Type"
//             onChange={handleUserTypeChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="accessService">Access Services</label>
//           <select multiple value={accessServiceOptions} onChange={handleAccessServiceChange}>
//             <option value="create">Create</option>
//             <option value="read">Read</option>
//             <option value="update">Update</option>
//             {userType === 'admin' && <option value="delete">Delete</option>}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="operation">Operation</label>
//           <select value={operation} onChange={handleOperationChange}>
//             <option value="">Select Operation</option>
//             <option value="create">Create</option>
//             <option value="read">Read</option>
//             <option value="update">Update</option>
//             {userType === 'admin' && <option value="delete">Delete</option>}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="operation">Operation Done</label>
//           <select value={operationdone} onChange={handleOperationDone}>
//             <option value="">Select Operation</option>
//             <option value="data1">Data1</option>
//             <option value="data2">Data2</option>
//             <option value="data3">Data3</option>
//             <option value="data4">Data4</option>
//           </select>
//         </div>
//         {renderInputField(operation)}
//         <button type="submit">Submit</button>
//       </form>

//       {submittedData.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>User Type</th>
//               <th>Access Service</th>
//               <th>Operation</th>
//               <th>Operation Done</th>
//             </tr>
//           </thead>
//           <tbody>
//   {submittedData.map((data, index) => (
//     <tr key={index}>
//       <td>{data.userType}</td>
//       <td>{data.accessServiceOptions}</td>
//       <td>{data.operation}</td>
//       {/* Conditionally display data based on operation */}
//       {data.operation === 'create' && <td>{data.createInput}</td>}
//       {data.operation === 'read' && <td>{data.readInput}</td>}
//       {data.operation === 'update' && <td>{data.updateInput}</td>}
//       {data.operation === 'delete' && <td>{data.deleteInput}</td>}
//     </tr>
//   ))}

//           </tbody>
//         </table>
//       )}
//     </div>
//     </>
//   );
// };

// export default UserDashboard;