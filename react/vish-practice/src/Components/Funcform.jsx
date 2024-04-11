import React, { useState } from "react";

export default function Funcform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(""); // State for username error
  const [perr, setPerr] = useState(""); // State for password error

  function handleInput(event) {
    setUsername(event.target.value);
    setErr(""); // Clear any previous username error on input change
  }

  function handlePassword(event) {
    setPassword(event.target.value);
    setPerr(""); // Clear any previous password error on input change
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement validation logic here
    let isValid = true;
    if (username.trim() === "") {
      setErr("Username cannot be empty");
      isValid = false;
    }
    // Add password validation logic here

    if (isValid) {
      // Make API call for authentication or perform other actions
      console.log("Submitting form with username:", username, "password:", password); // Replace with actual logic
    }
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            id="frstname"
            placeholder="Enter your First Name"
            onChange={handleInput}
          />
        </label>
        <br />
        <p id="err" style={{ color: "red" }}>
          {err}
        </p>
        <label htmlFor="password">
          <input
            type="password" // Use type="password" for passwords
            name="password"
            id="pswrd"
            placeholder="Enter Your Pswrd"
            onChange={handlePassword}
          />
        </label>
        <br />
        <p id="perr" style={{ color: "red" }}>
          {perr}
        </p>
        <button type="submit">Submit!</button>
      </form>
    </>
  );
}
