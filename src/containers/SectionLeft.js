// import { Description } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function SectionLeft({
  title,
  description,
  price,
  id,
  productsData,
  nextSlide,
  prevSlide,
}) {
  if (!Array.isArray(productsData) || productsData.length <= 0) {
    return null;
  }

  return (
    <Container>
      <Arrows>
        <ArrowForwardIosIcon className='left' onClick={prevSlide} />
        <ArrowForwardIosIcon className='right' onClick={nextSlide} />
      </Arrows>

      <ProductItem></ProductItem>
      <LeftProducts>
        <ProductImg></ProductImg>
        <ProductInfo>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>${price}</Price>
        </ProductInfo>
      </LeftProducts>
    </Container>
  );
}

export default SectionLeft;

const Container = styled.div``;

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
const ProductItem = styled.div``;
const LeftProducts = styled.div``;
const ProductImg = styled.div``;
const ProductInfo = styled.div``;
const Title = styled.h1``;
const Description = styled.p``;
const Price = styled.h2``;
