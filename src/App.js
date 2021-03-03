import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { styled } from '@material-ui/core';

import Hero from './containers/Hero';
import Search from './components/Pages/Search';
import Products from './components/Pages/Products';
import User from './components/Pages/User';
import Cart from './components/Pages/Cart';

function App() {
  //Creating useState for burger icon and dropdown menu!
  const [click_burger, setClick_burger] = useState(true);
  const handleClick_burger = useState(!click_burger);
  const closeBurger = () => setClick_burger(true);

  // Creating useState for dropdown menu of User icon in navbar

  const [clickUser, setClickUser] = useState(true);
  const handleClick_User = useState(!clickUser);
  const closeUserMenu = () => setClickUser(true);

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closeBurger();
    }
  });

  return (
    <div className='App'>
      <Router>
        <Header
          click_burger={click_burger}
          handleClick_burger={() => setClick_burger(!click_burger)}
          closeBurger={closeBurger}
          click_user={clickUser}
          handleClick_User={() => setClickUser(!clickUser)}
        />
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/user'>
          <User />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='//'>
          <Hero closeBurger={closeBurger} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
