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
import axios from './data/axios';

function App() {
  //Creating useState for burger icon and dropdown menu!
  const [click_burger, setClick_burger] = useState(true);
  const troggle_burger = () => setClick_burger(false);
  const closeBurger = () => setClick_burger(true);

  // Creating useState for dropdown menu of User icon in navbar
  const [click_User, setClickUser] = useState(true);
  const troggle_user_menu = () => setClickUser(false);
  const closeUserMenu = () => setClickUser(true);

  // UseStates for API calls using Axios
  const [productsData, setproductsData] = useState(); // For product data
  const [current, setCurrent] = useState(0); // for slides in the left component
  const [dataLength, setdataLength] = useState(0); //length data for the slides functions

  useEffect(() => {
    //Api call using axios to get product data
    const fetchData = async () => {
      const request = await axios.get('/products');
      setproductsData(request.data);
      setdataLength(request.data.length);
      setCurrent(0);
      return request.data;
    };
    fetchData();
    setCurrent();
  }, []);
  // console.log(length);

  //Functions for the slides in SectionLeft component
  const nextSlide = () => {
    setCurrent(current === dataLength - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? dataLength - 1 : current - 1);
  };

  //Event listener for the esc key to be able to close the dropdown menu
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
          {!productsData ? (
            <p>Loading</p>
          ) : (
            productsData.map((i, index) =>
              current === index ? (
                <SectionLeft
                  closeBurger={closeBurger}
                  closeUserMenu={closeUserMenu}
                  title={i.name}
                  description={i.description}
                  price={i.price}
                  id={i.id}
                  productsData={productsData}
                  nextSlide={nextSlide}
                  prevSlide={prevSlide}
                />
              ) : null
            )
          )}
        </Route>
      </Router>
    </div>
  );
}

export default App;
