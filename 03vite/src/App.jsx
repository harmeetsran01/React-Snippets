import './App.css'
import { useState } from 'react';

//Hooks

function App() {

/**
 * 
 *    varible , method that holds value of count
 *    (custom), (custom name)
 *       |      |
 *       ^      ^
 */
const [counter,setcounter] = useState(0) // 0 will store in counter varible

function addvalue(){

  setcounter(counter + 1)

}
function removevalue(){
setcounter(counter - 1)
}

  return (
    <>
        <h1>Third Proj</h1>
        <h2>Counter Value: {counter} </h2>  
        <button onClick={addvalue}>Add value</button>  
        <br />
        <button onClick={removevalue}>Remove Value: </button> 
      
    </>
  )
}

export default App
