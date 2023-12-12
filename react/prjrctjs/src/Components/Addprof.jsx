import React from "react";
import { useNavigate } from "react-router-dom";
// import { useEffect} from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Form1 from "./Form1";
import Contact from './Contact';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Addprof(){
    const navigate= useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    // const [selectedTab, setSelectedTab] = useState('Tab1');

    const [Popup, setPopup] = useState(false);
//   const [formData, setformData] = useState({
//     email: "",
//     password:"",
//     name:"",
//     phonenumber:""

//   });
//   const [error, setErr] = useState({
//     emErr: "",
//     pwErr: "",
//   });
//   useEffect(() => {
//     console.log("formData----", formData);
//     console.log("formData----E", formData.email);
//     console.log("formData----P", formData.password);
//   });
//   function handleChange(e) {
//     setformData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }
//   function SubmitHandler(e) {
//     e.preventDefault();
//     localStorage.setItem("email", "vishnupriya@gmail.com");
//     localStorage.setItem("password", "1234");
//     let setEmail = localStorage.getItem("email");
//     let setPassword = localStorage.getItem("password");
//     console.log("localValues", setEmail, setPassword);
//     if (setEmail ===formData.email && setPassword ===formData.password) {
//       console.log(formData.email,formData.password);
//       setErr({
//         ...error,
//         emErr: "",
//         pwErr: "",
//       });
//      console.log("i'm inside");
//      navigate('/Dashboard');
//     }
//     if (setEmail !== formData.email) {
//       //     alert('enter email')

//       setErr({
//         emErr: "enter email",
//       });
//     } else if (setPassword !== formData.password) {
//       setErr({
//         pwErr: "password is required",
//       });
//       //    formData.err="Wrong Inputs";
//        navigate('/');
//     }
// }
    return(
        <>
        <div className="addprof">
            <h3>Add New Profile</h3>
            <div className="tabs">
              <div className="row">
                <div className="col-md-6">
                <button onClick={()=>{setShowPopup(true);setPopup(false);}}className="Tab1">Basic</button>
       {showPopup && (
        <div className="Tab1">
          {/* <button className="close" onClick={() => setShowPopup(false)}><FontAwesomeIcon icon={faXmark} size="xl" /></button> */}
          <Form1 />
          </div> 
      )} 
              </div>
                <div className="col-md-6">
                <button onClick={()=>{setPopup(true);setShowPopup(false);}} className="Tab2">Contact</button>
                {Popup && (
        <div className="Tab2">
        {/* <button className="close" onClick={() => setPopup(false)}><FontAwesomeIcon icon={faXmark} size="xl" /></button> */}
          <Contact />
          </div> 
      )} 
                </div>
              </div>
            </div>
      
            {/* <form onSubmit={SubmitHandler}>
               
            <label htmlFor="text">Enter name</label>
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
              <br></br>
              <label htmlFor="text">Enter Phonenumber</label>
              <input
                type="number"
                placeholder="Enter your PhoneNumber"
                // id="email"
                className="form-control"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
               
              />
              <span style={{ color: "Red" }}>{error.emErr}</span>
              <br></br>




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

              <label htmlFor="Password">Re-Type Password</label>
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
              <button id="Signin">Sign Up</button>
            </form> */}

            <h5>
              Already have an account?
              <button onClick={()=> navigate("/")}  id="freg">
                Login here
              </button>{" "}
            </h5>
          </div>
        </>
    )
}
