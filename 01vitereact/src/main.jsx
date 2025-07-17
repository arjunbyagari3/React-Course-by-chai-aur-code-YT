import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import React from 'react'


function MyApp(){
  return(
    <h1> My App( ) function !............... </h1>
  )
}

const anotherUser = "arjun"

const reactElement=React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blanck'

  },
  'Google kavalentra?...',
  anotherUser
)

const anotherElement=(
  <a href="https://www.google.com" target="_blank"> Google............ </a>

)

createRoot(document.getElementById('root')).render(
    // MyApp()

    // anotherElement
    // reactElement

  <StrictMode>
    <App />
    {/* < MyApp/> */}
    
  </StrictMode>,
)
