import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function  Logout() {
  const navigate=useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(false);
    navigate("/Dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          {/* <h1>Welcome back!</h1> */}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please log in.</h1>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default Logout;

