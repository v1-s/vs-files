import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Contact from './Contact';
export default function Form1(){
    const navigate= useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [Popup, setPopup] = useState(false);
    const [formData, setformData] = useState({
      email: "",
      password:"",
      name:"",
      phonenumber:""
  
    });
    const [error, setErr] = useState({
      emErr: "",
      pwErr: "",
    });
    useEffect(() => {
      console.log("formData----", formData);
      console.log("formData----E", formData.email);
      console.log("formData----P", formData.password);
    });
    function handleChange(e) {
      setformData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
    function SubmitHandler(e) {
      e.preventDefault();
      localStorage.setItem("email", "vishnupriya@gmail.com");
      localStorage.setItem("password", "1234");
      let setEmail = localStorage.getItem("email");
      let setPassword = localStorage.getItem("password");
      console.log("localValues", setEmail, setPassword);
      if (setEmail ===formData.email && setPassword ===formData.password) {
        console.log(formData.email,formData.password);
        setErr({
          ...error,
          emErr: "",
          pwErr: "",
        });
       console.log("i'm inside");
       navigate('/');
      }
      if (setEmail !== formData.email) {
        //     alert('enter email')
  
        setErr({
          emErr: "enter email",
        });
      } else if (setPassword !== formData.password) {
        setErr({
          pwErr: "password is required",
        });
        //    formData.err="Wrong Inputs";
         navigate('/');
      }
  }
    return(
        <>
        <div className="Frm1">
         <form className="frm1" onSubmit={SubmitHandler}>
               
               {/* <label htmlFor="text">Enter name</label>
                 <input
                   type="text"
                   placeholder="Enter your Name"
                   // id="email"
                   className="form-control"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                  
                 />
                 <span style={{ color: "Red" }}>{error.emErr}</span>
                 <br></br> */}
              <label htmlFor="Email">Email address</label>
                 <input
                   type="text"
                   placeholder="Enter your Email"
                   // id="email"
                   className="form-control"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                  
                 />
                 <span style={{ color: "Red" }}>{error.emErr}</span>
                 <br></br>
                 <label htmlFor="Password">Password</label>
                 <input
                   type="text"
                   id="pswrd"
                   className="form-control"
                   name="password"
                   value={formData.password}
                   onChange={handleChange}
                   placeholder="Enter your Password"
                 />
                 <span style={{ color: "Red" }}>{error.pwErr}</span>
                 <br></br>
   
                 <label htmlFor="Re-Password">Re-Type Password</label>
                 <input
                   type="text"
                   id="pswrd"
                   className="form-control"
                   name="password"
                   value={formData.password}
                   onChange={handleChange}
                   placeholder="Enter your Password"
                 />
                 <span style={{ color: "Red" }}>{error.pwErr}</span>
                 <br></br>
                 <a className="frgtpswrd" href="#">
                   Forgot Password?
                 </a>
                 <br></br>
                 <button onClick={()=>{setPopup(true);setShowPopup(false);}} className="Tab2">Next</button>
                {Popup && (
        <div className="Tab2">
        {/* <button className="close" onClick={() => setPopup(false)}><FontAwesomeIcon icon={faXmark} size="xl" /></button> */}
          <Contact />
          </div> 
      )} 
               </form>
               </div>
         </>
    )
}