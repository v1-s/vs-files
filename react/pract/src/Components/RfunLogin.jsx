import React,{useState,useEffect} from "react";

import { useNavigate} from "react-router-dom";
export default function RfunLogin(){
                const navigate= useNavigate();
                const [formData,setformData]=useState({
                    email:'Enter Your Email',
                    password:""
                })
                const [error,setErr]=useState({
                    emErr:'',
                    peErr:''
                })
        useEffect(()=>{
            console.log("formData----",formData);
            console.log('formData----E',formData.email);
            console.log('formData----P',formData.password);

        })        
        function handleChange(e){
            setformData({
                ...formData,[e.target.name]:e.target.value
            })

        }
        function SubmitHandler(e){
          e.preventDefault();
        
              
        //     localStorage.setItem("email");
        //     localStorage.setItem("password") ; 
        //    let setEmail=localStorage.getItem("email");
        //    let setPswrd=localStorage.getItem("password");  
        //    console.log("localValues",setEmail,setPswrd);
           
           let emailregex=/^.[\w]{8,15}(?:@)([.\w]+){5,8}(?:.+)[\w]{2,3}$/; 
           let pswrdregex=/^(?=.*[A-Z])(?=.*[.])([A-Za-z0-9.]+){8,15}$/;
          if(emailregex.test(formData.email) && (pswrdregex.test(formData.password))){
        //     console.log(emailregex.test(formData.email))
                        setErr({
                            ...error,
                            emErr:"",
                            peErr:""
                        })
                        navigate('/Home');
                    } else if(!emailregex.test(formData.email)) {
            console.log(emailregex.test(formData.email))
            setErr({
                ...error,
                emErr:'enter correct email'
            })
            }
            else if (!pswrdregex.test(formData.password)){
                setErr({
                    ...error,
                    peErr:'password is required'
                
                })
                      //    formData.err="Wrong Inputs";
                  navigate('/');
            }
            else{
                setErr({
                    ...error,
                    emErr:"Wrong Email",
                    peErr:"Wrong Password"
                })
                  navigate('/');
             }

        }
    return(
        <>
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
        <span  style={{color:'Red'}}>{error.emErr}</span>
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
             <span style={{color:'Red'}}>{error.peErr}</span>
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
  );
}




