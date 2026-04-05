import { useState } from 'react'
import './App.css' 
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import { Outlet } from 'react-router-dom'
// Outlet is a component provided by React Router that serves as a placeholder for rendering the matched child route components.
// It allows you to define a layout or structure for your application while still rendering the specific content of the child routes within that layout.
// When a route is matched, the corresponding component for that route will be rendered inside the <Outlet /> component in the parent route's component hierarchy.

export default function Layout() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
      <Outlet />
     <Footer />
    </>
  )
}

 