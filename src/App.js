import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hero from './containers/Hero';
import SectionLeft from './containers/SectionLeft';
import Search from './Pages/Search';
import Products from './Pages/Products';
import User from './Pages/User';
import Cart from './Pages/Cart';
// import {
//   getProducts,
//   postProducts,
//   putProducts,
//   delProducts,
//   leftProducts,
// } from './data/Server';
import axios from 'axios';

function App() {
  //Creating useState for burger icon and dropdown menu!
  const [click_burger, setClick_burger] = useState(true);
  const troggle_burger = () => setClick_burger(false);
  const closeBurger = () => setClick_burger(true);

  // Creating useState for dropdown menu of User icon in navbar
  const [click_User, setClickUser] = useState(true);
  const troggle_user_menu = () => setClickUser(false);
  const closeUserMenu = () => setClickUser(true);

  //TOMMY SORRY FOR THE MESSY CODE HERE.. BELOW THIS LINE IS THE CODE THAT
  // i AM TRYING TO DISPLAY IN SectionLeft COMPONENET AS A PROP

  const [responseData, setResponseData] = useState('');
  const [isLoading, setisLoading] = useState(true);

  // const leftProducts = [];

  axios.defaults.baseURL = 'https://6059f463b11aba001745d2fe.mockapi.io';

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('/products');
        const allProducts = res.data;
        setResponseData(allProducts[0].name);
        setisLoading(false);
        // setResponseData(allProducts);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  });

  // const getProducts = () => {
  //   axios
  //     .get('/products')
  //     .then((res) => {
  //       const allProducts = res.data;
  //       setResponseData(allProducts.map((i) => i));
  //     })
  //     .catch((err) => console.log(err));
  // };

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
        <Route path='//'>
          <SectionLeft
            closeBurger={closeBurger}
            closeUserMenu={closeUserMenu}
            title={setResponseData}
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
