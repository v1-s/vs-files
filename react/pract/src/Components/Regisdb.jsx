import React from "react";
import axios from "axios";
class RegLog extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      idnum:"",  
      firstname:"",
      lastname:"",
      salary:"",
      phonenum:"",  
      email: "",
      password: "",
      Emerr: "",
      Pwerr: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    let Emerr = "";
    let Pwerr = "";
    if (name === "firstname") {
        const Emre = /^.[\w]{8,15}(?:@)([.\w]+){5,8}(?:.+)[\w]{2,3}$/;
        if (!Emre.test(value)) {
          Emerr = "firstname is not valid Plz Enter the requested format";
        }
      }
      if (name === "lastname") {
        const Emre = /^.[\w]{8,15}(?:@)([.\w]+){5,8}(?:.+)[\w]{2,3}$/;
        if (!Emre.test(value)) {
        Emerr = "";
        } 
      }
    if (name === "email") {
      const Emre = /^.[\w]{8,15}(?:@)([.\w]+){5,8}(?:.+)[\w]{2,3}$/;
      if (!Emre.test(value)) {
        Emerr = "Email is not valid Plz Enter the requested format";
      }
    }
    if (name === "password") {
      const preg = /^(?=.*[A-Z])(?=.*[.])([A-Za-z0-9.]+){8,15}$/;
      if (!preg.test(value)) {
        Pwerr = "Password is wrong Plz match the requested format ";
      }
    }
    if (name === "idnum") {
        const preg = /^(?=.*[A-Z])(?=.*[.])([A-Za-z0-9.]+){8,15}$/;
        if (!preg.test(value)) {
          Pwerr = "Idnum is wrong Plz match the requested format ";
        }
      }
      if (name === "phonenum") {
        const preg = /^(?=.*[A-Z])(?=.*[.])([A-Za-z0-9.]+){8,15}$/;
        if (!preg.test(value)) {
          Pwerr = "Phonenum is wrong Plz match the requested format ";
        }
      }
      if (name === "salary") {
        const preg = /^(?=.*[A-Z])(?=.*[.])([A-Za-z0-9.]+){8,15}$/;
        if (!preg.test(value)) {
          Pwerr = "Salary is wrong Plz match the requested format ";
        }
      }
    this.setState({
      [name]: value,
      Emerr: Emerr,
      Pwerr: Pwerr,
    });
  }

  handleSubmit = (e) => {
    alert("hello", e);
    e.preventDefault();
    let data = {
      idnum:this.state.idnum,  
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenum: this.state.phonenum,
      salary: this.state.salary,
    };
    console.log(
      this.state.email,
      this.state.password,
      this.state.firstname,
      this.state.lastname,
      this.state.phonenum,
      this.state.salary
    );
    // let url="https://localhost:1227/Contact";
    axios
      .post("http://127.0.0.1:1227/Contact",{data})
      .then((response) => {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // console.log(this.state.email,this.state.password);
  // let Emerr="";
  // let Pwerr="";
  // if ((this.state.email=="")){
  //         Emerr = 'Email is Empty';

  //     };
  //     if ((this.state.password=="")) {
  //         Pwerr="Password is empty";
  //     };

  //     this.setState({
  //         Emerr: Emerr,
  //         Pwerr:Pwerr
  //     });
  // };

  render() {
    const { idnum,firstname,lastname,phonenum,salary,email, password, Emerr, Pwerr } = this.state;

    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          style={{
            width: "400px",
            marginLeft: "400px",
            marginTop: "100px",
            textAlign: "center",
          }}
        >
          <h1>LOGIN FORM</h1>
          <div className="mb-3">
          <label>Firtname</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value={firstname}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>{Emerr}</span>
          </div>
          <div className="mb-3">
          <label>Lastname</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              value={lastname}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>{Emerr}</span>
          </div>
          <div className="mb-3">
          <label>Idnum</label>
            <input
              type="text"
              className="form-control"
              name="idnum"
              value={idnum}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>{Pwerr}</span>
          </div>
          <div className="mb-3">
          <label>Salary</label>
            <input
              type="text"
              className="form-control"
              name="salary"
              value={salary}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>{Pwerr}</span>
          </div>
          <div className="mb-3">
          <label>phonenum</label>
            <input
              type="text"
              className="form-control"
              name="phonenum"
              value={phonenum}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>{Pwerr}</span>
          </div>





















          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>{Emerr}</span>
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <span style={{ color: "red" }}>{Pwerr}</span>
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
            Submit
          </button>
        </form>
      </>
    );
  }
}
export default RegLog;
