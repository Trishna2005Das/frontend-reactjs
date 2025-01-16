import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: 'chu',
    age: 19
  }
  let myObj2={
  }
  return (
    <>
    {/* <h1 className='bg-cyan-500 text-black p-4 round'>Profile</h1> */}

{/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://imgs.search.brave.com/-L6vFPUMR9c9aTKc1KvPgUAKZq3YqQkQWFwg8r3bmi8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5rcG9wbWFwLmNv/bS8yMDIxLzAxL1Nl/bWFudGljLUVycm9y/LXdlYi1ub3ZlbC1j/b3Zlci0xLmpwZWc" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Computer science major Chu Sangwoo is the epitome of an inflexible and strict rule-abiding person. While working on a liberal arts group project with freeloaders who don’t put in any effort, Sangwoo reasonably decides to remove their names from the final presentation. But he didn’t imagine how involved he would become with the person whose study-abroad plans were messed up because of that project. The involved person: the campus star who everyone knows, Department of Design’s Jang Jaeyoung. He has everything from skills, looks, family background, and good relationships except for 1 big problem: Chu Sangwoo. What happens when an engineer and an artist whose personalities are like oil and water have to work together? Jang Jaeyoung is like a semantic error in the perfect world of Chu Sangwoo. Will Sangwoo be able to debug this?”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Semantic Error
      </div>
      <div class="text-slate-700 dark:text-slate-500">
      J.Soori, South Korea
      </div>
    </figcaption>
  </div>
</figure> */}

    <Cards username='Chosangwoo' btnText="click me"/>
    </>
  )
}

export default App
