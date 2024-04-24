import React, { useState } from 'react';
import "../Components/Sam2.css";
const UserDashboard = () => {
  const [userType, setUserType] = useState('');
  const [accessService, setAccessService] = useState('');
  const [operation, setOperation] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([
      ...submittedData,
      { userType, accessService, operation },
    ]);
    setUserType('');
    setAccessService('');
    setOperation('');
  };
  

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userType">User Type</label>
          <input type="text" id="userType" value={userType} placeholder='Enter the User Type' onChange={(e) => setUserType(e.target.value)}/>
           
        </div>
        <div className="form-group">
          <label htmlFor="accessService">Access Services</label>
          <input type="text" id="accessService" value={accessService}  placeholder='Enter Access Service' onChange={(e) => setAccessService(e.target.value)}/>
           
        </div>
        <div className="form-group">
          <label htmlFor="operation">Operation</label>
          <input type="text" id="operation" value={operation}  placeholder='Enter Operation' onChange={(e) => setOperation(e.target.value)}/>
            
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData.length > 0 && ( 
        <table>
          <thead>
            <tr>
              <th>User Type</th>
              <th>Access Service</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.userType}</td>
                <td>{data.accessService}</td>
                <td>{data.operation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserDashboard;
