import React from 'react'
import OpodenteUm from './components/Placar'
import './App.css'
import Placar from './components/Placar'
import Nomes from './components/Nomes'



function App() {
return(

  <div className='container'>
  <div className='oponente1'>
  <div className='nome'><Nomes/></div>
   <Placar />
   </div>


     <div className='oponente2'>
      <div className='nome'><Nomes/></div>
      <Placar />
      </div>
          
  </div>

    
)
}

export default App
