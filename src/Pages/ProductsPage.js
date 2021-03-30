import React from 'react';
import styled from 'styled-components';
import data from '../data/data.json';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Filter from '../components/Filter';

class ProductsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: '',
      sort: '',
    };
  }

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
