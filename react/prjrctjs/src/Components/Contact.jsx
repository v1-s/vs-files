import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
export default function Form1(){
    const navigate= useNavigate();
    const [formData, setformData] = useState({
      name:"",
      phonenumber:""
  
    });
    const [error, setErr] = useState({
      emErr: "",
      pwErr: "",
    });
    useEffect(() => {
      console.log("formData----", formData);
      console.log("formData----E", formData.name);
      console.log("formData----P", formData.phonenumber);
    });
    function handleChange(e) {
      setformData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
    function SubmitHandler(e) {
      e.preventDefault();
      localStorage.setItem("name", "vishnupriya");
      localStorage.setItem("phonenumber", "123456779");
      let setName = localStorage.getItem("name");
      let setPhonenumber = localStorage.getItem("phonenumber");
      console.log("localValues", setName, setPhonenumber);
      if (setName ===formData.name && setPhonenumber ===formData.phonenumber) {
        console.log(formData.name,formData.phonenumber);
        setErr({
          ...error,
          emErr: "",
          pwErr: "",
        });
       console.log("i'm inside");
       navigate('/Dashboard');
      }
      if (setName !== formData.name) {
        //     alert('enter email')
  
        setErr({
          emErr: "enter name",
        });
      } else if (setPhonenumber !== formData.phonenumber) {
        setErr({
          pwErr: "phonenumber is required",
        });
        //    formData.err="Wrong Inputs";
         navigate('/');
      }
  }
    return(
        <>
        <div className="Frm2">
         <form  className="frm2" onSubmit={SubmitHandler}>
               
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
                   type="phonenumber"
                   placeholder="Enter your PhoneNumber"
                   // id="email"
                   className="form-control"
                   name="phonenumber"
                   value={formData.phonenumber}
                   onChange={handleChange}
                  
                 />
                 <span style={{ color: "Red" }}>{error.pwErr}</span>
                 <br></br>
                 <button id="Signin">Sign Up</button>
               </form>
               </div>
         </>
    )
}