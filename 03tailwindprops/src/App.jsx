// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Example from './main'

import ProductCard from './components/productcard'

  let myObj={
    name:"Arjun",
    age:22
  }

function App() {
  
  // const [count, setCount] = useState(0)

  myObj={
    username:'arjun',
    age:22
  }


  return (
    <>
      {/* <h1 className="text-3xl font-bold text-red-700" > Arjun Byagari 30</h1> */}

      {/* <Example/> */}
      {/* <ProductCard username={Arjun}/> */}
      {/* <ProductCard channel="chai aur code" myarr={{name:'arjun',age:22}}/> */}
      {/* <ProductCard channel="chai aur code" someObj={myObj}/> */}
      {/* <ProductCard channel ="chai aur code " myArr={[1,2,3,4,45,5]}/> */}
      <ProductCard username="AJ" btnText="click here"/>
      <ProductCard username="bahubali" btnText="jai mahishmathi" />
      <ProductCard username="kick buttowski" btnText="thondara padaku ra sundara vadana" />
      <ProductCard username="kalki"  />

    </>
  )
}

export default App
