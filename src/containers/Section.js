// import { Description } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Section({
  title,
  description,
  price,
  id,
  ProductsData,
  nextSlide,
  prevSlide,
  image,
  ProductsSide,
}) {
  if (!Array.isArray(ProductsData) || ProductsData.length <= 0) {
    return null;
  }

  return (
    <Container
      style={
        ProductsSide === 1
          ? { background: '#D9C8B4', width: '50%' }
          : { background: '#8E958D', width: '50%', 'flex-direction': 'column' }
      }
    >
      <Arrows className='arrows'>
        <ArrowForwardIosIcon className='left' onClick={prevSlide} />
        <ArrowForwardIosIcon className='right' onClick={nextSlide} />
      </Arrows>

      <ProductItem>
        <FiberManualRecordIcon />
      </ProductItem>

      <ProductInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>${price}</Price>
      </ProductInfo>
      <ProductImg src={image}></ProductImg>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  padding-top: 50px;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #ffeeee;
  position: relative;
  /* 
  .arrows {
    display: none;
  }

  :hover {
    .arrows {
      display: inherit;
    }
  } */
`;

const Arrows = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 550px;
  width: 100%;

  .right {
    margin-right: 15px;
    border: none;
    z-index: 100;
    transition: ease-in-out 0.3s;
    cursor: pointer;
    border-radius: 15px;

    :hover {
      background: rgba(255, 238, 238, 1);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      color: #70543f;
    }
  }

  .left {
    margin-left: 15px;
    border: none;
    z-index: 100;
    border-radius: 15px;

    transition: ease-in-out 0.3s;
    transform: rotate(180deg);
    cursor: position;

    :hover {
      background: rgba(255, 238, 238, 1);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      color: #70543f;
    }
  }
`;

const ProductItem = styled.div`
  position: absolute;
  margin-right: 30px;
  margin-bottom: 15px;
  bottom: 0;
  right: 0;

  .icon {
    cursor: pointer;
    z-index: 0;
  }

  .icon-current {
    border: 1px solid white;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
  }
`;

const ProductImg = styled.img`
  border: 2px solid rgba(217, 200, 180, 0.75);
  border-radius: 15px;
  margin-left: 50px;
  margin-right: 20px;
  padding: 5px 5px 5px 5px;
  max-width: 100%;
  height: auto;
  max-height: 200px;

  /* margin-left: 200px; */
  /* max-height: auto; */
  margin-bottom: -4px;
  border-radius: 15px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50px;
  max-width: 400px;
`;
const Title = styled.h1``;
const Description = styled.p``;
const Price = styled.h2``;
