// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import './App.css'
import Footer from './footer'
import Gameboard from './gameboard'
import Instructions from './instructions';

function App() {
  // const [count, setCount] = useState(0)

 
 const reveal = () =>{
  const answer =  sessionStorage.getItem("computer_number");
   return(
    alert(answer)
   );

 }

  return <div className='container'>
   
   <div style={{display:'flex',justifyContent:"space-between",width:"100%",padding:"40px"}}>
    <button className='resetoption'   onClick={()=> window.location.reload(true)}>Reset</button>
    <button className='answer' onClick={reveal}>Answer</button>
    </div>
          <h1>Bulls and Cows</h1>
<Gameboard/>
<Instructions/>
<Footer/>
  </div>
    
    
  
}

export default App
