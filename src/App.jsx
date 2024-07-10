import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Registration from './components/Registration'
import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'

import Counter2 from './components/Counter2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <First/> */}
      {/* <Registration/> */}
      {/* <Tabs/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/reg" element={<Registration/>}/>
        <Route path="/tab" element={<Tabs/>}/>
        <Route path="/statebasics" element={<StateBasics/>}/>
        <Route path="/counter" element={<Counter2/>}/>
      </Routes>

    </>
  )
}

export default App
