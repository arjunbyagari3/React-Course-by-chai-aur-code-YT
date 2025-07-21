import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length , setLength ]=useState(10)
  const [number, setNumber] =useState(false)
  const [char, setChar]=useState(false)
  const [password,setPassword]=useState("")

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let alphabet="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(number){
      alphabet+="1234567890"
    }
    if(char){
      alphabet+="`~!@#$%^&*()_+<>?/.,{}[]'|"
    }

    for(let i=1;i<=length;i++){
      let randomChar = Math.floor(Math.random()*alphabet.length)
      
      pass+=alphabet[randomChar]
    }

    setPassword(pass)

  },[number,char,length])


useEffect(()=>{
  passwordGenerator()
},[length,char,number,setPassword])

const passwordRef = useRef(null)

const copyPass= useCallback(()=>{
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0,20);
  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
      <div id='body' className=' w-full h-screen fixed ' style={{backgroundColor:"black"}} >



      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red bg-gray-700 '>

        <h1 className=' text-black text-center my-3 '>Password Generator</h1>  

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>  
          
          <input type="text"
          value={password}
          placeholder='Password'
          readOnly
          ref={passwordRef}
          className=' outline-none w-full py-1 px-3 bg-white text-black rounded '
          />
          <button onClick={copyPass} className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy </button>

        </div>
        <button className=' flex items-center gap-x-1  '> </button>
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        
        id='range'
        onChange={(e)=>{setLength(Number(e.target.value))}}
        />
        <label htmlFor="range">length: {length}</label>

        <input 
        type="checkbox"
        defaultChecked={number}
        id='numberInput'
        
        onChange={()=>{
          setNumber((prev)=>!prev)
        }}
        className='ml-4 mr-1'
        />
        <label htmlFor="numberInput">Numbers</label>

        <input 
        type="checkbox" 
        defaultChecked={char}
        id="charInput" 
        onChange={()=>{
          setChar((prev)=>!prev)
        }}
        className='ml-4 mr-1'
        />
        <label htmlFor="charInput">Characters</label>


      </div>



      </div>
    </>
  )
}

export default App
