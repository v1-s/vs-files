import React from "react";
export default function Sign() {
  return (
    <>
      
      <div className="container">
        <div className="row">
          <div className="Ft col-md-6" style={{ position: "relative" }}>
            <h1>Board</h1>
          </div>
            <div className="Fr col-md-6">
            <h2>Sign In</h2>
            <h5>Sign in to your account</h5>
              <form>
           
              <label htmlFor="Email">Email address</label>
              <br></br>
              <input type="text" id="email" placeholder="Enter your Email" />
              <br></br>
              <label htmlFor="Password">Password</label>
              <br></br>
              <input type="text" id="pswrd" placeholder="Enter your Password" />
              <br></br>
              <a className="frgtpswrd" href="#">
                Forgot Password?
              </a><br></br>
              <button id="Signin">Sign In</button>
            </form>
           
            <h5>
              Don't have an account?
              <a id="freg" href="#">
                Register here
              </a>{" "}
            </h5>
            </div>
          </div>
        </div>
    </>
  );
}
