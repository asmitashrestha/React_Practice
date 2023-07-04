import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import User from './components/User'
import Paragraph from './components/Paragraph'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <div>
        <BrowserRouter>
        <Header/>
        {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<Paragraph/>}/>
          <Route path='users' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
      
 
)
