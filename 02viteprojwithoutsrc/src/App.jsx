
function App() {
  /*
  { } are used to use expression of JS in below componets or in html in jsx
    { varible } means evaluted expression - > Final outcome only, else work need to be done before
     no need to ${variblle name}
  */
  const name = "Harmeet Singh" 
  return (
    <>   
    {/* // This is called Fragment, as return will only return one element, 
    // Thus it has to Wrap around */}
    
      <h1>Hello {name}</h1>
    </>

  )
}

export default App
