//Feature-1
// import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Search from './Pages/Search';
import ProductsPage from './Pages/ProductsPage';
import User from './Pages/User';
import Cart from './Pages/Cart';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/products'>
            <ProductsPage />
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
}

export default App;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
