import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App,{Card3,newName} from './App.jsx'
import Proj1 from './proj1.jsx'
import Proj2 from './proj2.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <div className="text-xxl bg-blue-400">Hello Guys</div>        
//     <App />
//     <Card3 username = {"Data is Passing using Hook"} age = {10} />
//     {/* IN Upper line the data is passed as object */}
//     <newName></newName>
//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Proj1 />
  </StrictMode>,
)
