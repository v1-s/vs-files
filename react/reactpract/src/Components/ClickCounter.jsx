import  React,{Component} from 'react';
import withCounter  from './ReactPract2';
class ClickCounter extends Component{
    // constructor(props){
    //     super(props)
    //     this.state ={
    //         count:0
    //     }
    // }
    // increementCount=()=>{
    //     this.setState(prevState=>{
    //         return {count:prevState.count + 1}
    //     })
    // }
    render(){
  
        const {count,increementCount}=this.props
        return <button onClick={increementCount}>
            
            Clicked {count}times</button>
    }
}
export default withCounter(ClickCounter)
// export default function UpdatedComponent(Counter){
//     return function EnhancedComponent(){
//     const[count,setCount]=useState(0);
//         return(
//             <>
//          <div>
//         {/* <p>Count:{count}</p>     */}
//     <button onClick={()=> setCount(count+1)}> Increement Clicked {count} times </button>         
//             </div>    
//             </>
//         )
// }
// }