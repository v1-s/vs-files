import { React, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Sign() {
   const navigate= useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password:"",
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
    localStorage.setItem("email","v");
    localStorage.setItem("password","12345");
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
     navigate('/Dashboard');
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
  
  let data=formData;
  axios
      .post("http://127.0.0.1:1227/Contact",{data})
      .then((response) => {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="Ft col-md-6" style={{ position: "relative" }}>
            <h1>Board</h1>
            <FontAwesomeIcon id="Ftawsm" icon={faFacebookF} size="xl" />
            <FontAwesomeIcon id="Ftawsm" icon={faInstagram} size="xl" />
            <FontAwesomeIcon id="Ftawsm" icon={faTwitter} size="xl" />
            <FontAwesomeIcon id="Ftawsm" icon={faLinkedin} size="xl" />
          </div>
          <div className="Fr col-md-6">
            <h2>Sign In</h2>
            <h5>Sign in to your account</h5>
            <form onSubmit={SubmitHandler}>
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
              <a className="frgtpswrd" href="#">
                Forgot Password?
              </a>
              <br></br>
              <button id="Signin">Sign In</button>
            </form>

            <h5 style={{marginLeft:'-190px'}}>
              Don't have an account?
              <button onClick={()=> navigate("/Addprof")}  id="freg">
                Register here
              </button>{" "}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
  }

  // } else {
    //   setErr({
    //     ...error,
    //     emErr: "Wrong Email Empty",
    //     pwErr: "Wrong Password Empty",
    //   });
    //      formData.err="Wrong Inputs";
    //         navigate('/');
    // }