import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//  return (
//      <div>
//         <h1>Custom App </h1>
//      </div>
//  )

// }


// const ReactElement={
//     type :'a',
//     props:{
//     href:'https://google.com',
//     target:'_blank',
    
//     }, //object
//     children: " Click me "
//     //tree graph
//     }
// const anotherElement=(<a href="https://google.com" target='_blank'> Visit Google</a>)
const anotherUser="Starbucks"
const ReactElement=React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank',
       
        
    },
    'Click me for options-',
    anotherUser,

)
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

ReactDOM.createRoot(document.getElementById('root')).render(ReactElement )


