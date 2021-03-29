import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }

  render() {
    let boxClass = ['cart-button'];
    if (this.state.addClass) {
      boxClass.push('clicked');
    }
    return (
      <Container>
        <ULProducts className='products'>
          {this.props.products.map((product, id) => (
            <LIproduct key={product.id}>
              <ProductContainer className='product'>
                <Link to={'/' + product._id}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </Link>
                <ProductPrice className='product-price'>
                  <div>{product.price}</div>
                  <button
                    id={id}
                    className={boxClass.join(' ')}
                    onClick={this.toggle.bind(this)}
                  >
                    <span className='add-to-cart'>Add to cart</span>
                    <span className='added'>Added</span>
                    <ShoppingCartIcon />
                    <LocalMallIcon />
                  </button>
                </ProductPrice>
              </ProductContainer>
            </LIproduct>
          ))}
        </ULProducts>
      </Container>
    );
  }
}

const Container = styled.div``;
const ULProducts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;
const LIproduct = styled.li`
  /* flex: 2 1 10rem; */
  height: 25rem;
  /* width: 5rem; */
  padding: 1rem 1rem 2rem 1rem;
  margin: 2rem 2rem 2rem 0rem;
  border: 1px solid yellow;
  img {
    height: 20rem;
    border-radius: 15px;
  }
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  p {
    margin-top: 10px;
  }
`;
const ProductPrice = styled.div`
  margin-top: 10px;

  .cart-button {
    position: relative;
    padding: 10px;
    width: 200px;
    height: 60px;
    border: 0;
    border-radius: 10px;
    background-color: rgba(255, 238, 238, 1);
    outline: none;
    cursor: pointer;
    color: #70543f;
    transition: 0.1s ease-in-out;
  }

  .cart-button:hover {
    background-color: rgba(255, 238, 238, 0.7);
  }

  .cart-button:active {
    transform: scale(0.9);
  }

  .clicked {
    background-color: red;
  }
`;
