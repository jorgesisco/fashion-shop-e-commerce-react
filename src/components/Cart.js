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
      </Container>
    );
  }
}

const Container = styled.div`
  .cart {
  }
  .cart-header {
  }
`;
