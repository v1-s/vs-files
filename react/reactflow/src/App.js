// import logo from './logo.svg';
// import React,{useState ,useCallback} from 'react';
// import './App.css';
// // import ReactFlow from 'reactflow';
// import 'reactflow/dist/style.css';
// import ReactFlow, { Background, Controls,applyNodeChanges,applyEdgeChanges, MarkerType } from 'reactflow';
// import { type } from '@testing-library/user-event/dist/type';
// // import { useState } from 'react';
// import DnDFlow from './Components/Dragjs/Dragapp';
// const initialNodes = [
//   {
//     id: '1',
//     data: { label: 'Hello' },
//     position: { x: 0, y: 0 },
//     type: 'input',
//   },
//   {
//     id: '2',
//     data: { label: 'Welcome' },
//     position: { x: 20, y: 50 },
//   },
//   {
//     id: '3',
//     data: { label: 'WorldII' },
//     position: { x: 100, y: 100 },
//   },
// ];
// const initialEdges = [
//   { id: '1-2', source: '1', target: '2', label: 'from the', type: 'smoothstep' ,animated:'true',style:{stroke:'green'},markerEnd:{
//     type:MarkerType.ArrowClosed,
//   }},
//   { id: '2-3', source: '2', target: '3', label: 'Hell', type: 'simplebezier',animated:'true',style:{stroke:'red'} },
// ];
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); 
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   const [variant,setVariant] = useState('cross');
  


// const onNodesChange = useCallback(
//   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//   [],
// );
// const onEdgesChange = useCallback(
//   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//   [],
// );
// const handleLogin = () => {
//   setIsLoggedIn(true); // Update login state

//   // Set nodes only if not already logged in
//   if (!isLoggedIn) {
//     setNodes(initialNodes);
//   }
// };
//   return (
//     <><nav className="navbar">
//     {/* Your navbar content here */}
//     <button onClick={handleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
//     <button>Settings</button>
//   </nav>
//   {isLoggedIn &&
//     <DnDFlow/>
//     // <ReactFlow nodes={nodes}
//     //     onNodesChange={onNodesChange}
//     //     edges={edges}
//     //     onEdgesChange={onEdgesChange}
//     //     fitView>
//     //   <Background variant={variant} color='rebeccapurple' gap='50'/>

//     // </ReactFlow>
// }
//     </>
//   );
// }

// export default App;
// src/App.js

import React from 'react';
import './App.css';
import Flow from './Components/workflowData';

function App() {
  return (
    <div className="App">
     
      <h1>React Flow Workflow</h1>
      <Flow />
     
    </div>
  );
}

export default App;