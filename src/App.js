import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { styled } from '@material-ui/core';

import Hero from './containers/Hero';

function App() {
  const [click, setClick] = useState(true);
  const handleClick = useState(!click);

  const closeBurger = () => setClick(true);
  return (
    <div className='App'>
      <Router>
        <Header click={click} handleClick={() => setClick(!click)} />
      </Router>
      <Hero closeBurger={closeBurger} />
    </div>
  );
}

export default App;
