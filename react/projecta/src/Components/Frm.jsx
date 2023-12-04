import React from "react";
import { useState } from "react";
export default function FForm(){
    const[input,setInput]=useState('');
    const[password,setPassword]=useState('');
    const[err,setErr]=useState('')
    const[perr,setPerr]=useState('');

    function handleSubmit(e){
         e.preventDefault();
         console.log(input,password);
         if(input==''){
            setErr('Input Field is required');
         }else if(input.length<8){
            setErr('Username must be 8 Characters');
         }else{
            setErr('');
         }
        if(password==''){
            setPerr('Password field is empty');
        }else if(password.length<8){
            setPerr('Password must be 8 Characters');
        }else{
            setPerr('');
        }
        if(input!==''&&password==''){
            setPerr("Password Field is Empty");
        }
        if(input==''&&password !==''){
            setErr("Input Field is Empty");
        }


        
    };
    function handleInput(e){
        return  setInput(e.target.value);
    };
    function handlePassword(e){
       return  setPassword(e.target.value);
    }




        return(
            <>
            <div className="Frm">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>
                  <input type="text" name='username' id="frstname" placeholder="Enter your First Name" onChange={handleInput}/>
                </label><br></br>
                <p id='err' style={{color:'red'}}>{err}</p>
                <label htmlFor='password'>
                  <input type="text" name="password" id='pswrd' placeholder="Enter Your Pswrd" onChange={handlePassword}/>
                </label>
                <br></br>
                <p id="perr"style={{color:'red'}}>{perr}</p>
                <button type="submit">Submit!</button>
            </form>
            </div>
            </>
        )
}