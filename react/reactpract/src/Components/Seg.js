import React from 'react';
const Hello = props =>{
    console.log(props)
    return(<>
 <h1>Hello{props.name}</h1>
 {props.children}
 </>
    )
}
// const Hello=()=>{
//     // return React.createElement('div',null,React.createElement('h1',null,<h1>Hello</h1>))
//     return React.createElement('div',null,<h1>Hello</h1>)
// }
export default Hello