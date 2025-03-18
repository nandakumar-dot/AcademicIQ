import React from 'react'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Chatbot from './components/Chatbot/Chatbot'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Roadmap from './components/Roadmap/Roadmap'

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/roadmap' element={<Roadmap/>} />
      </Routes>
      <Chatbot/>
      
    </>
  )
}

export default App