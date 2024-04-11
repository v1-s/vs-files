import React, { useState } from "react";

export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial login state

  const handleLoginClick = () => {
    setIsLoggedIn(true); // Update state on button click
  };

  return (
    <>
      <div>
        <button onClick={handleLoginClick}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
}
