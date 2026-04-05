import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import New1  from './new1.jsx'  
import React from 'react'

function Myapp(){
  return(
    <>
    <p>This came from main jsx Myapp</p>
    </>
  )
}

const reactElement = React.createElement(
// It has pre defined syntax, Defining Property first -> the attributes - > htmlcontent
  'a',
  {
    href: 'https://google.com',
    target:'_blank'
  },
  'Click me to visit'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <App />
    <New1 />
    <Myapp />
    {reactElement}
  </StrictMode>
)
