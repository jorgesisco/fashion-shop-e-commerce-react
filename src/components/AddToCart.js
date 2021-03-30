import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import styled from 'styled-components';

export default class AddToCart extends Component {
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
      <Button className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>
        <span className='add-to-cart'>Add to cart</span>
        <span className='added'>Added</span>
        <ShoppingCartIcon className='cart-icon' />
        <LocalMallIcon className='box-icon' />
      </Button>
    );
  }
}

const Button = styled.button`
  .cart-icon {
    position: absolute;
    z-index: 2;
    top: 55%;
    left: 50%;

    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: 0;
  }
  .box-icon {
    position: absolute;
    z-index: 1;
    top: -20%;
    left: 50%;
    font-size: 1.6rem;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  span {
    position: absolute;
    z-index: 3;
    left: 50%;
    top: 50%;
    font-size: 1.3rem;
    transform: translate(-50%, -50%);
  }
  .add-to-cart {
    opacity: 1;
    font-size: 1.2rem;
  }

  .added {
    opacity: 0;
  }
`;
