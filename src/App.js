import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hero from './containers/Hero';
import Section from './containers/Section';
import Search from './Pages/Search';
import Products from './Pages/Products';
import User from './Pages/User';
import Cart from './Pages/Cart';
import axios from './data/axios';
import styled from 'styled-components';
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
  const [leftProductsData, setleftProductsData] = useState(); // For product data
  const [leftCurrent, setleftCurrent] = useState(0); // for slides in the left component
  const [leftDataLength, setleftDataLength] = useState(0); //length data for the slides functions

  const [rightProductsData, setrightProductsData] = useState(); // For product data
  const [rightCurrent, setrightCurrent] = useState(0); // for slides in the right component
  const [rightDataLength, setrightDataLength] = useState(0); //length data for the slides functions

  useEffect(() => {
    //Api call using axios to get product data
    const leftFetchData = async () => {
      const leftRequest = await axios.get('leftProducts');
      setleftProductsData(leftRequest.data);
      setleftDataLength(leftRequest.data.length);
      setleftCurrent(0);
      return leftRequest.data;
    };

    const rightFetchData = async () => {
      const rightRequest = await axios.get('rightProducts');
      setrightProductsData(rightRequest.data);
      setrightDataLength(rightRequest.data.length);
      setrightCurrent(0);
      return rightRequest.data;
    };

    leftFetchData();
    setleftCurrent();

    rightFetchData();
    setrightCurrent();
  }, []);

  //Functions for the slides in SectionLeft component
  const leftNextSlide = () => {
    setleftCurrent(leftCurrent === leftDataLength - 1 ? 0 : leftCurrent + 1);
  };
  const rightNextSlide = () => {
    setrightCurrent(
      rightCurrent === rightDataLength - 1 ? 0 : rightCurrent + 1
    );
  };

  const leftPrevSlide = () => {
    setleftCurrent(leftCurrent === 0 ? leftDataLength - 1 : leftCurrent - 1);
  };
  const rightPrevSlide = () => {
    setrightCurrent(
      rightCurrent === 0 ? rightDataLength - 1 : rightCurrent - 1
    );
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
        <SectionContainer>
          <Route path='//'>
            {!leftProductsData ? (
              <p>Loading</p>
            ) : (
              leftProductsData.map((i, index) =>
                leftCurrent === index ? (
                  <Section
                    closeBurger={closeBurger}
                    closeUserMenu={closeUserMenu}
                    image={i.img}
                    title={i.name}
                    description={i.description}
                    price={i.price}
                    id={i.id}
                    ProductsData={leftProductsData}
                    nextSlide={leftNextSlide}
                    prevSlide={leftPrevSlide}
                    ProductsSide={1}
                    className='leftC'
                  />
                ) : null
              )
            )}
          </Route>
          <Route path='//'>
            {!rightProductsData ? (
              <p>Loading</p>
            ) : (
              rightProductsData.map((i, index) =>
                rightCurrent === index ? (
                  <Section
                    image={i.img}
                    title={i.name}
                    description={i.description}
                    price={i.price}
                    id={i.id}
                    ProductsData={rightProductsData}
                    nextSlide={rightNextSlide}
                    prevSlide={rightPrevSlide}
                  />
                ) : null
              )
            )}
          </Route>
        </SectionContainer>
      </Router>
    </div>
  );
}

export default App;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
