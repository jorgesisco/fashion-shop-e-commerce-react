import React, { Component } from 'react';
import styled from 'styled-components';
export default class Filter extends Component {
  render() {
    return (
      <Container className='filter'>
        <div className='filter-result'>{this.props.count} Products</div>
        <div className='filter-sort'>
          Order{' '}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option value='Latest'>Latest</option>
            <option value='Lowest'>Lowest</option>
            <option value='Highest'>Highest</option>
          </select>
        </div>
        <div className='filter-size'>
          Filter{' '}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value=''>All</option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
            <option value='XXL'>XXL</option>
          </select>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  border-bottom: 0.1rem #c0c0c0 solid;
  justify-content: space-around;

  div {
    flex: 1;
  }
`;
