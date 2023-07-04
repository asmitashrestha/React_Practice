import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Bodyimg from './components/Bodyimg'
import Header from './components/Header'
import Home from './components/Home'
import Counter from './components/Counter'
import User from './components/User'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <div>
        <BrowserRouter>
        <Header/>
        <Home/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<Bodyimg/>}/>
          <Route path='users' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
      
 
)
