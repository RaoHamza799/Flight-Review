import React from 'react';
import { Airlines } from './components/Airlines/Airlines';
// import GymList from './components/GymList';
import Airline from './components/Airline/Airline';

import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact= {true} element={<Airlines/>}/>
        <Route path="/airlines/:slug" exact= {true} element={<Airline/>}/>
      </Routes>
    </Router>
  )
}

export default App;
