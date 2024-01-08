import React from "react";
const withCounter=WrappedComponent=>{
    (increement,WrappedComponent)=>{
    class withCounter extends React.Component{
        constructor(props){
        super(props)
        this.state ={
            count:0
        }
    }
    increementCount=()=>{
        this.setState(prevState=>{
            return {count:prevState.count + 1}
        })
    }
        render(){
            return <WrappedComponent
            count={this.state.count}
            increementCount={this.increementCount}
            {...this.props}/>
        }
    }return withCounter


}
}
export default withCounter  
// export default function HOC(){
//     return(
//         <>
//         <div className="container">
//             <h1>Hello</h1>
//         </div>
//         </>
//     )
// }
