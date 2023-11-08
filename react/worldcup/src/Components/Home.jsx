import React from 'react';

class Home extends React.Component{
    constructor (props){
        super(props);
        this.state={
            count:0
        }
        this.increement=this.increement.bind(this);
        this.decreement=this.decreement.bind(this);
    }

    increement(){
        console.log("state",this);
        this.setState({
            
            count:this.state.count+1
        })
    }
    decreement(){
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        return(
            <div>
                <p>Count:{this.state.count}</p>
                <button onClick={this.increement}>increement</button>
                <button onClick={this.decreement}>Decreement</button>
            </div>
        )
    }
}

export default Home