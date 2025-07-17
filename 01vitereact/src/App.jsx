import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Chai from './chai'

function App() {
  const [count, setCount] = useState(0)

  const name ='Arjun'

  return (
    <>
      {/* <h1> Arjun with React + vite </h1> */}
      {/* <Chai/> */}
      <h1> my name is {name} | we can only write final outcome (evaluated expressions only ) because it's an object </h1>

    </>
  )
}

export default App
