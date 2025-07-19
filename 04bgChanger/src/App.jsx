import { useState } from 'react'

import './App.css'
import ColorButton from './buttons/ColorButton'

function App() {

  const [color , setColor ]=useState("red")



  return (
    <>
      <div className='w-full h-screen duration-200 '
      style={{backgroundColor:color}}
      >
        <div className=' fixed flex flex-wrap justify-center top-12 inset-x-0 px-2 ' >
          <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-cyan-800 px-3 py-2 rounded-2xl ' >
            {/* way-1  */}
            <button onClick={()=>setColor("Black")} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"black"}} > Black </button>
            {/* way -2 */}
            <button onClick={()=>{setColor("Violet")}} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"Violet"}}>Violet</button>
            <button onClick={()=>{setColor("Indigo")}} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"Indigo"}}>Indigo</button>
            <button onClick={()=>{setColor("Blue")}} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"Blue"}}>Blue</button>
            <button onClick={()=>{setColor("Green")}} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"Green"}}>Green</button>
            <button onClick={()=>{setColor("Yellow")}} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"Yellow"}}>Yellow</button>
            <button onClick={()=>{setColor("Orange")}} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"Orange"}}>Orange</button>
            <button onClick={()=>{setColor("Red")}} className=' outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor:"Red"}}>Red</button>
            <button onClick={()=>{setColor("White")}} className='outline-none text-black px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"White"}}>White</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
