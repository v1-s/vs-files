import React from 'react';
class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:"",
            submit:""
        };

     this.handleChange=this.handleChange.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState(state=>{
          return {input: event.target.value} 
        });
      }
      handleSubmit(event) {
        event.preventDefault()
        this.setState(state=> {
          return {submit: this.state.input}
        });
      }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.input}
                onChange={this.handleChange} />
              <button type='submit'>Submit!</button>
            </form>
            <h1>{this.state.submit}</h1>
          </div>
        );
      }
    };
  
export default MyForm