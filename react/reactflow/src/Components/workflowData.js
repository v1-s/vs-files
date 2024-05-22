// export const nodes = [
//     { id: '1', position: { x: 50, y: 50 }, data: { label: 'Node 1' } },
//     { id: '2', position: { x: 200, y: 50 }, data: { label: 'Node 2' } },
//     { id: '3', position: { x: 350, y: 50 }, data: { label: 'Node 3' } },
//   ];
  
//   export const edges = [
//     { id: 'e1-2', source: '1', target: '2' },
//     { id: 'e2-3', source: '2', target: '3' },
//   ];
// src/Workflow.js
import { type } from '@testing-library/user-event/dist/type';
import ReactFlow, { Controls, Background, StepEdge } from 'reactflow';
import 'reactflow/dist/style.css';
const edges = [{ id: '1-2', source: '1', target: '2',type:"smoothStep",animated:"true" },
    {id:'2-3',source:'2',target:'3',type:"smoothstep"}
];
const nodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 50 },
  },
  {
    id: '3',
    data: { label: 'World #' },
    position: { x: 100, y: 100 },
  },
];

function Flow() {
  return (
    <div style={{ height: '600px' }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;