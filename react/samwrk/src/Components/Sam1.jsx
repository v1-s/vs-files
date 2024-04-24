import React, { useState } from 'react';
import "../Components/Sam1.css";

const CallDetailsTable = () => {
  const [openDetails, setOpenDetails] = useState({}); // State to track open details

  const handleRowClick = (id) => {
    console.log(id);
    setOpenDetails((prevDetails) => ({
      ...prevDetails,
      [id]: !prevDetails[id],
    }));
  };

  const callData = [
    {
      id: '177000',
      name: 'Nora Thomas',
      account: '177000',
      calls: 24,
      minutes: '25.65m',
      details: [
        { callId: 555, direction: 'Out', number: '(00) 88542069', duration: '72s', switchCode: 'SW3' },
        { callId: 556, direction: 'In', number: '(01) 7432576', duration: '61s', switchCode: 'SW3' },
      ],
    },
    {
      id: '177001',
      name: 'Mila',
      account: '177001',
      calls: 24,
      minutes: '25.65m',
      details: [
        { callId: 555, direction: 'Out', number: '(00) 88542069', duration: '72s', switchCode: 'SW3' },
        { callId: 556, direction: 'In', number: '(01) 7432576', duration: '61s', switchCode: 'SW3' },
      ],
    },
  ];

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Account</th>
          <th scope="col">Calls</th>
          <th scope="col">Minutes</th>
        </tr>
      </thead>
      <tbody>
        {callData.map((call) => (
          <tr
            key={call.id}
            className={`clickable ${openDetails[call.id] ? 'show' : ''}`}
            onClick={() => handleRowClick(call.id)}
          >
            <td>{call.name}</td>
            <td>{call.account}</td>
            <td>{call.calls}</td>
            <td>{call.minutes}</td>
          </tr>
        ))}
        {/* Conditionally render details table after the clicked row */}
        {Object.keys(openDetails).map((callId) => (
          openDetails[callId] && (
            <tr key={`details-row-${callId}`}>
              <td>
                <table className="table table-striped details-table">
                  {/* Details table content */}
                  <thead>
                    <tr>
                      <th scope="col">Call Id</th>
                      <th scope="col">Direction</th>
                      <th scope="col">Number</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Switch Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {callData.find((item) => item.id === callId).details.map((detail) => (
                      <tr key={detail.callId}>
                        <td>{detail.callId}</td>
                        <td>{detail.direction}</td>
                        <td>{detail.number}</td>
                        <td>{detail.duration}</td>
                        <td>{detail.switchCode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
};

export default CallDetailsTable;


