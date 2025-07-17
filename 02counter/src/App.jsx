import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 10;

  let [counter , setCounter ]= useState(0)

  const addValue= ()=>{
    // console.log("value added",Math.random());
    if (5>counter>0) {
      counter +=1;
      setCounter(counter)
      console.log(counter);
    }
  }

  const decrement=()=>{
    if(counter>-5){
      // counter=counter-1
      setCounter(counter-1)
      console.log(counter);
    }
  }



  return (
    <>
      <h1>Hello Arjun </h1>
      <p> counter value is {counter} </p>
      <button onClick={addValue}> penchu {counter }</button> <hr />
      <button onClick={decrement}> thagginchu {counter}</button> <hr />
      {/* <button onClick={()=>{if(counter>-5){setCounter(counter-1)}}}> thagginchu {counter}</button> <hr /> */}
      <button onClick={()=>{setCounter(counter*2),console.log(counter)}}>Double it {counter}</button> <hr />
      <button onClick={()=>{setCounter(Math.sqrt(counter)),console.log(counter)}}>root value is {counter}</button> <hr />


      <footer>footer {counter}</footer>
    </>
  )
}

export default App
