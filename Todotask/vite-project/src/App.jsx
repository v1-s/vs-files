import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Components/Home';
import Click from './Components/Event';
function App() {
  const  number=[1,2,3,4,5,6,8,9];
  const place=["krnl","ap","lok","janath"];
  const name=["Kita","liya","kola","chimpi","loki"];
  const person={
    name:"karna",
    location:"yudhistr",
    occupation:"king",
    dynasty:"kuru"
  }
  const places=[
    { name:"karunya", loc:"98"},
    {name:"loio",loc:"78"},
    {name:"kill",loc:"67"},
    {name:"lill"}
 ]
  return (
    <>
    {/* <Hello places={places}/> */}
        {/* <Hello name={name} place={place} number={number} person={person}/> */}
        {/* <Hello /> */}

     
     <Click/>
       
    </>
  )
}

export default App
