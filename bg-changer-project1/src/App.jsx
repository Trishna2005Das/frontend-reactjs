import { useState } from 'react'


function App() {
  
  const [color, setColor] = useState('black')
  return (
    <>
    <div className="w-full h-screen duration-300"
    style={{backgroundColor: color}}>
   
    <div className='fixed flex justify-center items-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap gap-2 shadow-lg bg-white p-2 rounded-3xl'>
      <button 
      onClick={() => setColor('olive')}
      className="text-white outline-none px-4 py-1 rounded-full" style={{backgroundColor:'olive'}}>olive</button>
      <button 
      onClick={() => setColor('red')}
      className="text-white outline-none px-4 py-1 rounded-full" style={{backgroundColor:'red'}}>red</button>
      <button 
      onClick={() => setColor('green')}
      className="text-white outline-none px-4 py-1 rounded-full" style={{backgroundColor:'green'}}>green</button>
      <button 
      onClick={() => setColor('blue')}
      className="text-white outline-none px-4 py-1 rounded-full" style={{backgroundColor:'blue'}}>blue</button>
      
      </div> 
    </div>
    </div>
    </>
  )
}

export default App

// what does w-full do?->full width
// what does h-screen do?->full height
// what does duration-300 do?->change the duration of the transition
