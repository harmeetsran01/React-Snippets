import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Users from './components/Users/Users.jsx'
import Github,{GithubApi} from './components/Github/Github.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{
    path: "/home",
    element: <Home />
  }, {
    path: "/about",
    element: <About />
  },
{
    path: "/contact",
    element: <Contact />
  }]
}])

const router2 = createBrowserRouter(
  createRoutesFromElements(
    // path / will be the parent route and Layout will be the component that gets rendered when the path is matched.
    // The child routes are defined within the parent route, and when a child route is matched,
    //  its corresponding component will be rendered inside the <Outlet /> component in the Layout.
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} /> {/* this will be the default route when the path is / */}
      <Route path="home" element={<Home />} />
      {/* here home is the child route and it will be rendered inside the Layout component */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<Users />} />
      {/*           ^     ^                  ^ 
                    |     |                  |
                    fn   path parameter      component to render when the path is matched
                                              and para is passed to the component as a prop .*/}

    <Route path="github" element={<Github />} loader={GithubApi} />
    </Route>
  )
) 

console.log(router2);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router2} />
  </StrictMode>,
)
