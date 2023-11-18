import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("silver");
 
  return(<div className=' OuterMost w-full h-screen duration-200'
  style={{backgroundColor : color}}>
    <div className=' InnerFirst fixed flex flex-row bottom-12 inset-x-0 justify-center'>
    <div className=' flex flex-wrap justify-center 
    px-2 py-2 w-fit gap-3 rounded-2xl' style={{backgroundColor:'white' ,color:'white'}}
    >
      <button className=' rounded-full px-6 py-2' style={{backgroundColor : 'red'}} type='button' onClick={()=>{setColor('red')}}>Red</button>
      <button className='rounded-full px-6 py-2' style={{backgroundColor : 'green'}} type='button' onClick={()=>{setColor('green')}}>Green</button>
      <button className=' rounded-full px-6 py-2' style={{backgroundColor : 'blue'}} type='button' onClick={()=>{setColor('blue')}}>Blue</button>
      <button className=' rounded-full px-6 py-2' style={{backgroundColor : 'olive'}} type='button' onClick={()=>{setColor('olive')}}>Olive</button>
      <button className=' rounded-full px-6 py-2' style={{backgroundColor : 'gray'}} type='button' onClick={()=>{setColor('gray')}}>Gray</button>
      <button className=' rounded-full px-6 py-2' style={{backgroundColor : 'yellow'}} type='button' onClick={()=>{setColor('yellow')}}>Yellow</button>
      <button className=' rounded-full px-6 py-2' style={{backgroundColor : 'pink'}} type='button' onClick={()=>{setColor('pink')}}>Pink</button>
      <button className=' rounded-full px-6 py-2' style={{backgroundColor : 'purple'}} type='button' onClick={()=>{setColor('purple')}}>Purple</button>
      <button className=' rounded-full px-6 py-2' style={{backgroundColor : 'lavender'}} type='button' onClick={()=>{setColor('lavender')}}>Lavender</button>
      <button className='rounded-full px-6 py-2' style={{backgroundColor : 'white'}} type='button' onClick={()=>{setColor('white')}}>White</button>
      <button className='rounded-full px-6 py-2' style={{backgroundColor : 'black'}} type='button' onClick={()=>{setColor('black')}}>Black</button>
      

    </div>
    </div>
  </div>)
}

export default App
