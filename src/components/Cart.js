import React, { Component } from 'react';
import styled from 'styled-components';

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
                    <button onClick={() => this.props.removeFromCart(item)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
`;
