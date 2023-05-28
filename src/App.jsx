import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Buttons from './Pages/Buttons'
import Inputs from './Pages/Inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/buttons' element={<Buttons/>}/>
          <Route path='/inputs' element={<Inputs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
