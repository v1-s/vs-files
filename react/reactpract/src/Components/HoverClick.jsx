// import React, { useState } from 'react';

// export default function Hover() {
//   const [hoverCount, setHoverCount] = useState(0);

//   return (
//     <div>
//       <button onMouseOver={() => setHoverCount(hoverCount + 1)}>
//         Hovered over {hoverCount} times
//       </button>
//     </div>
//   );
// }

import  React,{Component} from 'react';
import withCounter from './ReactPract2';
class Hover extends Component{
    // constructor(props){
    //     super(props)
    //     this.state ={
    //         count:0
    //     }
    // }
    // increementCount=()=>{
    //     this.setState(prevState=>{
    //         return {count:prevState.count+1}
    //     })
    // }
    render(){
        const{count,increementCount}=this.props
        return <button onMouseOver={increementCount}>
        
            Hovered {count}times</button>
    }
}
export default withCounter(Hover)
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