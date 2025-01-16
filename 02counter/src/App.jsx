import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSate } from 'react'

function App() {
  //so if we use const datatype instead of let for usestate then it will give an error because usestate is a hook that returns an array that contains two values: the current state and a function to update it. 
  let [counter,setCounter]=useState(0)

  //setCounter is a function that updates the state of the counter variable to the new value passed to it. 
  //The setCounter function is called when the user clicks the button.
  //let counter=0 not required now 
  const addValue=()=>{
    console.log("clicked",counter)
    
    setCounter((prevCounter) => prevCounter + 1)
    //the () is a callback function that will be executed when the setCounter function is called.
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    //the increment will be done only once not multiple times because setCounter is a function that updates the state of the counter variable to the new value passed to it. the useState sends ui in bacth so the increment will be done only once.
  }
  const removeValue=()=>{
    console.log("clicked",counter)
    counter=counter-1
    setCounter(counter)
  }

  return (
    <>
    <h1>Trisham</h1>
    <h2>years : {counter}</h2>

    <button  onClick={addValue}>increase value</button>
   
    <br />
    <button onClick={() => setCounter(0)}>Reset</button>
    <br />
    <button  onClick={removeValue}>increase value</button>
    </>
  )
}

export default App
