import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FunLoginform() {
    const navigate= useNavigate(); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
                // const [email,setEmail] = useState('');
                // const [password,setPassword] =useState('');// instead of creating 2 states we can define them in one obj//
                const [formData,setformData] =useState({
                        email:'',
                        password:''
                });
                const[error,setErr]=useState({
                       emErr:'',
                       pwErr:''

                });
                const handleLogin = () => {
                  setIsLoggedIn(true);
                };
              
                const handleLogout = () => {
                  setIsLoggedIn(false);
                };
              
                //  const [email,setEmail] = useState('Email');
                //  const [password,setPassword] =useState('Password');
                // useEffect=()=>{
                //     console.log("formData",formData);
                // }
                useEffect(()=>{
                    // console.log("error data",err.emErr);
                    // console.log("err",err.pwErr);
                    console.log("formData",formData.email);
                    console.log("formdata---1",formData.password);
                    // console.log("formData---1",email);
                    // console.log("formData2--",password);
                });
          function handleChange(e){
           
            console.log("event",e);
            setformData({
                ...formData,[[e.target.name]]:e.target.value

            })
               
            console.log("event---1",formData.email);
            console.log("event---2",formData.password);
            }
            function SubmitHandler(e){
                e.preventDefault();
              localStorage.setItem("email","vishnupriya@gmail.com");
              localStorage.setItem('password',"1234");
              let setEmail=localStorage.getItem("email");
              let setPassword =localStorage.getItem('password');
              console.log("localValues",setEmail,setPassword);
                if(setEmail === formData.email && setPassword === formData.password){
                    setErr({
                        ...error,
                               emErr:"",
                               pwErr:""
                    })
                    console.log("i'm inside");
                    navigate('/Home');
                }
                 if(setEmail !== formData.email ){
                  
                //     alert('enter email')

                setErr({
                    emErr:'enter email'
                })
                }
                else if( setPassword !==formData.password){
                    setErr({
                        
                        pwErr:'password is required'
                    
                    })
                          //    formData.err="Wrong Inputs";
                      navigate('/');
                }
                else{
                    setErr({
                        ...error,
                        emErr:"Wrong Email Empty",
                        pwErr:"Wrong Password Empty"
                    })
                          //    formData.err="Wrong Inputs";
                //       navigate('/');
                 }

            }









  return (
    isLoggedIn ? (
    <>
     <button
                    onClick={handleLogout}
                    className="btn btn-secondary"
                    style={{ marginLeft: "990px", marginTop: "10px" }}
                >
                    Logout
                </button>
      <form onSubmit={SubmitHandler}
        style={{
          width: "400px",
          marginLeft: "400px",
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <h1>LOGIN FORM</h1>
       
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        <span  style={{color:'Red'}}>{err.emErr}</span>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
             <span style={{color:'Red'}}>{err.pwErr}</span>
        </div>
        {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label>Check me out</label>
  </div> */}
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginLeft: "30px", marginTop: "10px" }}
        >
         Login
        </button>
        
      </form>
    </>
    ) : (
     <>
        <h1>Please log in.</h1>
        <button onClick={handleLogin}>Login</button>
      </>
    )
);
}