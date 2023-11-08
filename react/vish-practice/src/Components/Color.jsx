import React from 'react';
class Color extends React.Component{
        constructor (props){
            super(props);
            this.state={
                bgblack:'black',
                bgpink:'pink',
                bgblue:'blue',
                bgred:'red',
                bgviolet:'violet'
            }
            this.input=this.input.bind(this);
        }
        input(event){
            const value= event.target.value;
            console.log(value);
         if(value==="blue"){
                  this.setState({bgblack:"blue"})
            }else if(value==="pink"){
                this.setState({bgblack:"pink"})
            }else if(value==="red"){
                this.setState({bgblack:"red"})
            }else if(value==='violet'){
                this.setState({bgblack:"violet"})
            }else{
                this.setState({bgblack:"black"})
            }
        }

        render(){
            return(
                <div>
                    <p>SetColor</p>
                    <input type='text' name='color' onChange={this.input}/>
                    <div style={{margin:"40px 550px 500px 550px",width:"30px",height:"30px",padding:"50px",backgroundColor:this.state.bgblack,color:"white"}}><p>{this.state.bgblack}</p></div>
                </div>
            )
        }
}
export default Color;
