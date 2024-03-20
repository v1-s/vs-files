import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Pract() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();  
  const handleRegister = (e) => {
    e.preventDefault();

    // Validation (optional)
    if (!username || !email || !password) {
      alert('Please enter all fields.');
      return;
    }

   
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password',password);

   
    setUsername('');
    setEmail('');
    setPassword('');

    alert('Registration successful! Please proceed to login.');
    navigate('/login')
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Pract;



















// import React, { useState, useEffect } from 'react';
// // import './App.css'; // Import your CSS file for styling

// function Pract() {
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [storedUsers, setStoredUsers] = useState([]); // Array to store registered users

//   // Load registered users from localStorage (or a secure backend) on component mount
//   useEffect(() => {
//     const users = localStorage.getItem('registeredUsers');
//     if (users) {
//       setStoredUsers(JSON.parse(users));
//     }
//   }, []);

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Validation (optional)
//     if (!username || !email || !password) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     // Hash password before storing (never store plain text passwords)
//     // Use a secure hashing library like bcrypt
//     const hashedPassword = hashPassword(password); // Implement secure hashing

//     const newUser = { username, email, hashedPassword }; // Store hashed password

//     // Update stored users (localStorage or backend)
//     setStoredUsers([...storedUsers, newUser]);
//     localStorage.setItem('registeredUsers', JSON.stringify([...storedUsers, newUser]));

//     setIsRegistered(true);
//     // Keep the username state unchanged after registration
//     // setEmail(''); // Clear email after registration (optional)
//     setPassword(''); // Clear password after registration
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert('Please enter email and password.');
//       return;
//     }

//     // Compare entered password with stored hashed password (backend or localStorage)
//     const foundUser = storedUsers.find((user) => user.email === email);
//     if (!foundUser || !comparePasswords(password, foundUser.hashedPassword)) {
//       alert('Invalid email or password.');
//       return;
//     }

//     setIsLoggedIn(true);
//     setUsername(foundUser.username); // Set username on successful login
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername('');
//   };

//   // Implement secure password hashing and comparison functions here
//   // (bcrypt or a similar library is recommended)
//   const hashPassword = (password) => {
//     // Implement hashing logic using a secure library
//   };

//   const comparePasswords = (enteredPassword, storedHash) => {
//     // Implement password comparison logic using the same library used for hashing
//   };


//   return (
//     <div className="App">
//       {isRegistered ? (
//         <div className="login-container">
//           <h2>Welcome,{username}</h2>





//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div className="register-container">
//           <h2>Register</h2>
//           <form onSubmit={handleRegister}>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <button type="submit">Register</button>
//           </form>
//         </div>
//       )}

//       {isLoggedIn && !isRegistered && (
//         <div className="login-container">
//           <h2>Logged in as {username}</h2>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Pract;
