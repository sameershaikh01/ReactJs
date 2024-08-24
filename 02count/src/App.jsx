import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(12);


//  let counter = 5

  const AddValue = () => {
    //   setCounter(counter + 1) // Also setCounter is not compulsory name
    // counter = counter + 1;
    // setCounter(counter)
    if(counter <= 19){
      setCounter(counter + 1)
    }
  }

  const removeValue = () =>{
   if(counter > 0 ){
    setCounter(counter -1)
   }

  }


  return (
    <>
    <h1>sameer aur react</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={AddValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
