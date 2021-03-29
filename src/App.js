//Feature-1
// import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './containers/Hero';
import Section from './containers/Section';
import Search from './Pages/Search';
import Products from './Pages/Products';
import User from './Pages/User';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
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
          <Hero />
        </Route>
        <SectionContainer>
          <Route path='//'>
            <Section
              title='product name'
              description='description'
              price='price'
            />
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
