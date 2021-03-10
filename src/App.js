import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { styled } from '@material-ui/core';

import Hero from './containers/Hero';
import Search from './Pages/Search';
import Products from './Pages/Products';
import User from './Pages/User';
import Cart from './Pages/Cart';

function App() {
  //Creating useState for burger icon and dropdown menu!
  const [click_burger, setClick_burger] = useState(true);
  const troggle_burger = () => setClick_burger(false);
  const closeBurger = () => setClick_burger(true);

  // Creating useState for dropdown menu of User icon in navbar
  const [click_User, setClickUser] = useState(true);
  const troggle_user_menu = () => setClickUser(false);
  const closeUserMenu = () => setClickUser(true);

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closeBurger();
      closeUserMenu();
    }
  });

  return (
    <div className='App'>
      <Router>
        <Header
          click_burger={click_burger}
          troggle_burger={troggle_burger}
          closeBurger={closeBurger}
          click_user={click_User}
          troggle_user_menu={troggle_user_menu}
          closeUserMenu={closeUserMenu}
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
          <Hero closeBurger={closeBurger} closeUserMenu={closeUserMenu} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
