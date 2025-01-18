import { useState, useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [count, setCount] = useState(8)
  //useState for checkbox
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  //to change some values in passwrod
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)
  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (number) str += '0123456789'
    if (symbol) str += '!@#$%^&*'
    for (let i = 1; i <= count; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [count, number, symbol, setPassword])
  // const generatePassword = useCallback(() => {
  //    }, [count, number, symbol, setPassword])
//useCallback-> useCallback is a hook that returns a memoized version of a function that only changes if one of its dependencies has changed. useCallback is used to memoize a function so that it is only re-created when its dependencies change.
//dependecies->the dependencies of a useCallback are the values passed to it as an argument. If the dependencies change, the function will be re-created and the useCallback will return a new function.array to pass the values


const copyPassword = useCallback(() => {
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])


useEffect(() => {
  generatePassword()
}, [count, number, symbol, setPassword]) // setPassword is passed not password beacause setPassword is a function
//useEffect is a hook that runs a function when the component mounts or when the dependencies change.
  return (
    //background is black so use colors like cyan blue for div purple and other neon colors for text,buttons  
    <>
    
    <div>
      <h1 className='bg-cyan-500 text-black p-4 round'>Password Generator</h1>
      {/* <div className='flex justify-center items-center'>
        <div className='bg-black p-4 rounded-3xl'>  
        <div className='flex justify-center items-center'>
        <p className='text-white p-2'>Password Length</p>
        <input className='p-2 m-2 rounded-3xl' type="number" value={count} onChange={(e) => setCount(e.target.value)} />
        </div>
        <div className='flex justify-center items-center'>
        <input type="checkbox" id="number" checked={number} onChange={(e) => setNumber(e.target.checked)} />
        <label className='text-white p-2' htmlFor="number">Include Numbers</label>
        </div>
        <div className='flex justify-center items-center'>
        <input type="checkbox" id="symbol" checked={symbol} onChange={(e) => setSymbol(e.target.checked)} />
        <label className='text-white p-2' htmlFor="symbol">Include Symbols</label>
        </div>
        <button className='bg-cyan-500 text-black p-2 rounded-3xl' onClick={generatePassword}>Generate Password</button>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='bg-cyan-500 text-black p-4 round'>{password}</h1>
      </div> */}
      <div className='flex justify-center items-center p-10 m-10 bg-cyan-500 rounded-3xl'>
        <div className='flex flex-wrap justify-center items-center shadow-lg rounded-lg p-3'>
          <input type="text"
          value={password}a
          className='outline-none px-3 py-1.5 m-2 rounded-lg'
          placeholder='Password'
          readOnly
          ref={passwordRef} />
          <button
           onClick={copyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 m-2 rounded-lg
          shadow-lg hover:bg-green-800
          active:scale-90
  active:shadow-green-600
  '>copy</button>
          </div>
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        <div className='text-white flex justify-center items-center'>
       
        <input className='cursor-pointer p-2 m-2 rounded-3xl' min={8} max={16} type="range" value={count} onChange={(e) => setCount(e.target.value)} />
        <label className='p-1 m-1 '>password length:{count}</label>
        </div>
        <div className='flex justify-center items-center'>
        <input type="checkbox" id="number" checked={number} onChange={(e) => setNumber(e.target.checked)} />
        <label className='text-white p-2' htmlFor="number">Include Numbers</label>
        </div>
        <div className='flex justify-center items-center'>
        <input type="checkbox" id="symbol" checked={symbol} onChange={(e) => setSymbol(e.target.checked)} />
        <label className='text-white p-2' htmlFor="symbol">Include Symbols</label>
        </div>
        <button 
        className='bg-cyan-500 text-black p-2 rounded-lg
       
         active:ring-2 active:ring-offset-2 active:ring-green-500
        ' onClick={generatePassword}>Generate Password</button>
        
      </div>

    </div>
    </>
  )
}

export default App
//useState is a hook that returns an array that contains two values: the current state and a function to update it