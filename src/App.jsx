// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import './App.css'
import Footer from './footer'
import Gameboard from './gameboard'

function App() {
  // const [count, setCount] = useState(0)

  return <div className='container'>
          <h1>Bulls and Cows</h1>
<Gameboard/>
<Footer/>
  </div>
    
    
  
}

export default App
