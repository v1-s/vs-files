import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username,setUsername]=useState('');
//   const handleLogin = (e) => {
//     e.preventDefault();

    const storedCredentials = {
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password') ,
        username:localStorage.getItem('username')
      };
    
      const handleLogin = (e) => {
        e.preventDefault();
        console.log(storedCredentials.password);
        // Validation (optional)
        if (!email || !password) {
          alert('Please enter email and password.');
          return;
        }
    
        // const hashedPassword = '1234'/* Hash the entered password for demonstration */
        const isAuthenticated = storedCredentials.email === email && storedCredentials.password === password;
         
        if (isAuthenticated) {
          setUsername(storedCredentials.username);  
          setIsLoggedIn(true);
          alert('Login successful!');
        } else {
          alert('Invalid email or password.');
        }
    
        setEmail('');
        setPassword('');
    }
        

    // Validation (optional)
//     if (!email || !password) {
//       alert('Please enter email and password.');
//       return;
//     }

//     // Simulated login (demonstration only, not secure):
//     const validCredentials = email === 'v@gmail.com' && password === '1234'; // Replace with actual credentials (for demonstration only)

//     if (validCredentials) {
//       setIsLoggedIn(true);
//       setUsername(true);
//       alert('Login successful! {username}');
//     } else {
//       alert('Invalid email or password.');
//     }

//     setEmail('');
//     setPassword('');
//   };

  return (
    <div>
     
      {!isLoggedIn && (

        <form onSubmit={handleLogin}>
            <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
      )}
      {isLoggedIn && (
        <div>
          <h2>Welcome back! {username}</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Login;
