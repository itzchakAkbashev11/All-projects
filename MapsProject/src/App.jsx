import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Page1 from './components/Page1'
import Maps from './components/Maps'
// import Loading from './shared/Loading'
import { useState } from 'react'
// console.log(document.cookie)
function App() {
  const [loading, setLoading] = useState(true)
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/page1" element={<Page1/>} />
        <Route path="/maps" element={<Maps/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
