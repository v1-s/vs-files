import React from "react";
export default function Sign(){
    return(
        <>
        <h2>
            Sign In 
        </h2>
        <h4>Sign in to your account</h4> 
         <div className="container">
            <div className="row">
        <div className="Ft col-md-6">
            <h1>Board</h1>
        </div>
        <div className="Fr col-md-6">
            <form>
                <label htmlFor="Email">Email address</label><br></br>
                <input type="text" id="email" placeholder="Enter your Email"/><br></br>
                <label htmlFor="Password">Password</label><br></br>
                <input type="text" id="pswrd" placeholder="Enter your Password"/><br></br>
                <a id="frgtpswrd" href="#">Forgot Password?</a>
            </form>
            <button id="Signin">Sign In</button>
            <h5>Don't have an account?<a id="frgtpswrd" href="#">Register here</a> </h5>
        </div>
      </div>
    </div> 
        </>
    )
}