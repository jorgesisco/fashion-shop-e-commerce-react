import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Products extends Component {
  render() {
    return (
      <Container>
        <ULProducts className='products'>
          {this.props.products.map((product) => (
            <LIproduct key={product.id}>
              <ProductContainer className='product'>
                <Link to={'/' + product._id}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </Link>
                <ProductPrice className='product-price'>
                  <div>{product.price}</div>
                  <button className='button-primary'>Add to cart</button>
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

  li {
    flex: 0 1 29rem;
    height: 47rem;
    padding: 1rem;
    margin: 1rem;
  }
`;
const LIproduct = styled.li``;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-arrond;
  height: 100%;
  img {
    max-width: 25srem;
    max-height: 25rem;
  }
`;
const ProductPrice = styled.div`
  display: flex;
  align-items: center;

  div,
  button {
    text-align: center;
    flex: 1;
  }

  div {
    font-size: 2rem;
  }

  button {
    padding: 1rem;
    border: 1px solid #c0c0c0;
    outline: none;
    background-color: #ffeeee;
    border-radius: 15px;
    cursor: pointer;

    :hover {
      border: 1px solid #808080;
    }
  }
`;
