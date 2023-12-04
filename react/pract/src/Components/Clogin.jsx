import React from "react";
class Log extends React.Component{
        constructor(Props){
            super(Props);
            this.state={
                email:"",
                password:"",
                Emerr:"",
                Pwerr:""
       
            }
            this.handleSubmit=this.handleSubmit.bind(this);
            this.handleChange=this.handleChange.bind(this);
        }
        handleChange(e){
            const{name,value}=e.target;
            let Emerr="";
            let Pwerr="";
            if (name === 'email') {
                const Emre = /^.[\w]{8,15}(?:@)([.\w]+){5,8}(?:.+)[\w]{2,3}$/;
                if (!Emre.test((value))) {
                    Emerr = 'Email is not valid Plz Enter the requested format';
                }
            }
            if(name === 'password') {
                const preg=/^(?=.*[A-Z])(?=.*[.])([A-Za-z0-9.]+){8,15}$/
                if (!preg.test((value))) {
                    Pwerr = 'Password is wrong Plz match the requested format ';
                }
            }
            this.setState({
                [name]: value,
                Emerr: Emerr,
                Pwerr:Pwerr
            });
            
        }; 

     
        handleSubmit(e){
            e.preventDefault()
            console.log(this.state.email,this.state.password);
            let Emerr="";
            let Pwerr="";
            if ((this.state.email=="")){
                    Emerr = 'Email is Empty';

                };
                if ((this.state.password=="")) {
                    Pwerr="Password is empty";
                };
                 
                this.setState({
                    Emerr: Emerr,
                    Pwerr:Pwerr
                });
            };
    



render(){
        const {email,password,Emerr,Pwerr}=this.state;

    return(
        <>
        <form onSubmit={this.handleSubmit} style={{width:"400px",marginLeft:'400px',marginTop:"100px",textAlign:'center'}}>
            <h1 >LOGIN FORM</h1>
  <div className="mb-3">
    <label >Email address</label>
    <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange}/>
    <span style={{color:'red'}} >{Emerr}</span>
  </div>
  <div className="mb-3">
    <label >Password</label>
    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange}/>
    <span style={{color:'red'}}>{Pwerr}</span>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label>Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary" style={{marginLeft:'30px',marginTop:"10px"}}>Submit</button>
</form>
        </>
    )
}
};
export default Log;