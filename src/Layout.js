import React from 'react'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
function Layout() {
  return (
   <Router>
    <Routes>
        <Route path='/Home' Component={Home} />
        <Route path='/Login' Component={Login} />
        <Route path='/Signup' Component={Signup} />
    </Routes>
   </Router>
  )
}

export default Layout