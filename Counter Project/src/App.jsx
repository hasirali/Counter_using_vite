import { useState } from 'react';
import './App.css'

function App() {

  let[counter , setCounter] = useState(0);

  const addValue=()=>{
     // counter=counter+1 
    // setCounter(counter)
    setCounter(counter+1)
  }

  const subtractValue=()=>{
    // counter=counter-1 
    // setCounter(counter)
    // or
    if(counter<=0){
      setCounter(counter)
      alert("you have reached zero my boii")
    }
    else{
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>Understanding Hooks</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={subtractValue}>subtract Value</button>
    </>
  )
}

export default App
