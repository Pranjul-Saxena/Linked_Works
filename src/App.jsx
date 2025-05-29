import React from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Projects'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Portfolio />} />
        {/* 
        <Route path="*" element={<NotFoundPage />} />*/}
      </Route>
    </Routes>
  )
}

export default App