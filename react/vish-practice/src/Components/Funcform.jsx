import React from "react";
import { ReactDOM } from "react-dom";
export default function Funcform(){
    const[input,setInput]=use.state('');
    function handleInput(){

    }
    function handlePassword(){
        
    }
    return(
        <>
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
            </>      
         )
};