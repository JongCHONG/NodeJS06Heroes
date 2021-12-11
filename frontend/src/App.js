import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Heroes from './pages/Heroes'

const App = () => {
  return (
    <div className="container my-2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Heroes/>}/>
          <Route exact path="/heroes" element={<Heroes />}/>
          <Route path="/heroes/:slug" element={<Heroes />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App