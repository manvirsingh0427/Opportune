import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ApplyJob from './pages/ApplyJob';
import Applications from './pages/Applications';

function App() {
  return (
     <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/applications' element = {<Applications/>}/>
      <Route path='/apply-job/:id' element = {<ApplyJob/>}/>
     </Routes>
  )
}

export default App
