import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card";

function App() {
  let myObj ={
    username : "raveen chakraborty",
    age : 32
  }
  let newArr = [1,2,5,3,43,4]
  return (
    <>
      <h1  className='bg-green-400 text-black p-5 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Raveen kakujre Chakraborty" someObj={myObj} array={newArr}  btnText="click for female consultancy"  />
      <Card username="Hitesh Mandira" someObj={myObj} array={newArr} btnText="click for male consultancy" imgsrc="/public/Jeff-Lack-Stylist-1-1024x1024.png"  />

    </>
  )
}

export default App
