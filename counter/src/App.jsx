import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(15)
  const addValue = ()=>{
    console.log("clicked",counter);
    // counter ++;
    if(counter < 20){setCounter(counter +1)
    }
  }
  const removeValue =()=>{
    console.log("clicked",counter);
    if(counter>0){setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>JAI SHREE RAM</h1>
      <h2> Counter Value : {counter}</h2>
      <button onClick={addValue}> Add Value to {counter}</button>
      <br />
      <button onClick={removeValue}> Remove Value to {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
