import React from 'react';
import styled from 'styled-components';
import data from '../data/data.json';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Products from '../components/Products';

class ProductsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: '',
      sort: '',
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Link style={{ 'text-decoration': 'none' }} to='/products'>
            React Shoping Cart
          </Link>
        </Header>
        <Main>
          <Content>
            <MainContent>
              <Products products={this.state.products} />
            </MainContent>

            <Sidebar>Cart Items</Sidebar>
          </Content>
        </Main>
        <Footer className='footer' />
      </Container>
    );
  }
}

export default ProductsPage;

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: 5rem 1fr 5rem;
  grid-template-columns: 1fr;
  height: 100%;
  background: #70543f;
  /* border: 1px solid black; */
`;
const Header = styled.header`
  grid-area: header;
  background-color: #d9c8b4;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const Main = styled.main`
  grid-area: main;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const MainContent = styled.div`
  flex: 3 60;
`;
const Sidebar = styled.div`
  flex: 1 20;
`;
