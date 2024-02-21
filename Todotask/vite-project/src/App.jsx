import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Components/Home';
function App() {
  const  number=[1,2,3,4,5,6,8,9];
  const place=["krnl","ap","lok","janath"];
  const name=["Kita","liya","kola","chimpi","loki"]
  return (
    <>
        <Hello name={name} place={place} number={number}/>
       
    </>
  )
}

export default App
