import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import Contact from './components/Contact';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      
      <Route path='/contact' element={<Contact/>}/>
      
      
      
    </Routes>
  </Router>,

  document.getElementById('root')
);


