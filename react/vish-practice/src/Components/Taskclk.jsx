// import React, { useState } from "react";

// export default function ConditionalRendering() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial login state

//   const handleLoginClick = () => {
//     setIsLoggedIn(true); // Update state on button click
//   };

//   return (
//     <>
//       <div>
//         <button onClick={handleLoginClick}>
//           {isLoggedIn ? "Logout" : "Login"}
//         </button>
//       </div>
//     </>
//   );
// }

// import React, { useState } from "react";
// const [isLoggedIn,setIsLoggedIn]=useState(false);
// const handleLogin=()=>{
//     setIsLoggedIn(true);
// }

// export default function CondRendering(){
//     return(
//         <>
//         <div>
//         <button onClick={handleLogin}>
//         {isLoggedIn ? 'Logout':'Login'}
//         </button>
//         </div>
//         </>
//     )
// }

import React from "react";


export default function CondRendering(props){
    const isLoggedIn = React.useState(props)
    return(
        <div>
            {isLoggedIn ?(
            <button onClick={props.onLogout}>Logout</button>
            ):(
            <button onClick={props.onLogin}>Login</button>
            )
        }
        </div>
    )



//     const handleLogin=()=>{
//         setLoggedIn(true)
//     }
//     const handleLogout=()=>{
//         setLoggedIn(false)
//     }
//  return(
//     <>
//     <div>
//         <button isLoggedIn={loggedIn}  onLogin={handleLogin} onLogout={handleLogout}>

//         </button>
//     </div>
//     </>
//  )
}








// import React from 'react';

// function LoginButton(props) {
//   const isLoggedIn = React.useState(props); // Assuming isLoggedIn is passed as a prop

//   return (
//     <div>
//       {isLoggedIn ? ( // Conditional rendering with ternary operator
//         <button onClick={props.onLogout}>Logout</button>
//       ) : (
//         <button onClick={props.onLogin}>Login</button>
//       )}
//     </div>
//   );
// }

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false); // State to manage login status

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <LoginButton isLoggedIn={loggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    </div>
  );
}

export default App;


