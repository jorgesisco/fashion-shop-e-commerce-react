import React from 'react';
import styled from 'styled-components';
import data from '../data/data.json';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Filter from '../components/Filter';
import Cart from '../components/Cart';

class ProductsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: '',
      sort: '',
    };
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }

    this.setState({ cartItems });
  };

  a = () => {
    console.log('test');
  };

  sortProducts = (event) => {
    const sort = event.target.value;

    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === 'Lowest'
            ? a.price > b.price
              ? 1
              : -1
            : sort === 'Highest'
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  filterProducts = (event) => {
    if (event.target.value === '') {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <Container>
        <Header>
          <Link
            style={{ 'text-decoration': 'none', color: '#70543f' }}
            to='/products'
          >
            Our available products
          </Link>
        </Header>
        <Main>
          <Content>
            <MainContent>
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              />
            </MainContent>

            <Sidebar>
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
              />
            </Sidebar>
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
  /* background: #70543f; */
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
