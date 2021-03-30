import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AddToCart from './AddToCart';

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
                <Link style={{ textDecoration: 'none' }} to={'/' + product._id}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </Link>
                <ProductPrice className='product-price'>
                  <div>{product.price}</div>

                  <AddToCart />
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
  height: 25rem;
  padding: 1rem 1rem 2rem 1rem;
  margin: 2rem 2rem 2rem 0rem;
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
    color: #ffeeee;
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

  .cart-button.clicked .cart-icon {
    animation: cart 1.5s ease-in-out forwards;
  }
  .cart-button.clicked .box-icon {
    animation: box 1.5s ease-in-out forwards;
  }

  .cart-button.clicked span.add-to-cart {
    animation: txt1 1.5s ease-in-out forwards;
  }
  .cart-button.clicked span.added {
    animation: txt2 1.5s ease-in-out forwards;
  }

  @keyframes cart {
    0% {
      left: -40%;
      opacity: 1;
    }
    40%,
    60% {
      left: 50%;
      opacity: 1;
    }
    100% {
      left: 110%;
      opacity: 0;
    }
  }
  @keyframes box {
    0% 40% {
      top: -20%;
      opacity: 1;
    }
    60% {
      top: 40%;
      left: 52%;
      opacity: 1;
    }
    100% {
      top: 40%;
      left: 112%;
      opacity: 0;
    }
  }
  @keyframes txt1 {
    0% {
      opacity: 1;
    }
    20%,
    100% {
      opacity: 0;
    }
  }
  @keyframes txt2 {
    0%,
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
