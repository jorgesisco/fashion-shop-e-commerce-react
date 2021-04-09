import React, { Component } from 'react';
import styled from 'styled-components';
import formatCurrency from './util';
export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <Container>
        {cartItems.length === 0 ? (
          <div className='cart cart-header'>Cart Is empty</div>
        ) : (
          <div className='cart cart-header'>
            You have {cartItems.length} in the cart{' '}
          </div>
        )}
        <div>
          <div className='cart'>
            <ul className='cart-items'>
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className='right'>
                      {formatCurrency(item.price)} x {item.count}{' '}
                      <button
                        className='button'
                        onClick={() => this.props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div className='cart'>
              <div className='total'>
                <div>
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button className='button-primary'>Proceed to Checkout</button>
              </div>
            </div>
          )}
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  .cart {
    padding: 1rem;
    margin: 1rem;
    display: flex;
  }
  .cart-header {
    border-bottom: 0.1rem #c0c0c0 solid;
  }

  .cart-items {
    padding: 0;
    width: 100%;
    list-style-type: none;
  }

  .cart-items img {
    width: 5rem;
  }

  .cart-items li {
    display: flex;
  }

  .cart-items li div {
    padding: 0.5rem;
  }

  .cart-items li div:last-child {
    flex: 1;
  }

  .right {
    text-align: right;
  }
`;
