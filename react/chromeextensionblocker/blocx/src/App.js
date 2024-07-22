// src/App.js

import React, { useState, useEffect } from 'react';

function App() {
  const [blocklist, setBlocklist] = useState([]);
  const [newSite, setNewSite] = useState('');

  useEffect(() => {
    // Use local storage or other client-side storage for non-extension data
    const storedBlocklist = JSON.parse(localStorage.getItem('blocklist')) || [];
    setBlocklist(storedBlocklist);
  }, []);

  const addSite = () => {
    const updatedBlocklist = [...blocklist, newSite];
    localStorage.setItem('blocklist', JSON.stringify(updatedBlocklist));
    setBlocklist(updatedBlocklist);
    setNewSite('');
  };

  const removeSite = (site) => {
    const updatedBlocklist = blocklist.filter(item => item !== site);
    localStorage.setItem('blocklist', JSON.stringify(updatedBlocklist));
    setBlocklist(updatedBlocklist);
  };

  return (
    <div>
      <h1>Website Blocker</h1>
      <input
        type="text"
        value={newSite}
        onChange={(e) => setNewSite(e.target.value)}
        placeholder="Enter website to block"
      />
      <button onClick={addSite}>Add</button>
      <ul>
        {blocklist.map((site, index) => (
          <li key={index}>
            {site}
            <button onClick={() => removeSite(site)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
