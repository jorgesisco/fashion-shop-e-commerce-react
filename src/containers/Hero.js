import React from 'react';
import styled from 'styled-components';
import ProductData from '../data/ProductData';

function Hero({ closeBurger }) {
  return (
    <Container onClick={closeBurger}>
      <Arrows>
        {ProductData.map((item) => (
          <Product>
            {item.img.map((image) => (
              <ProductImg src={image.img1}></ProductImg>
            ))}

            <ProductInfo>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Price>{item.price}</Price>
              <ImgGalery></ImgGalery>
              <BuyButton>Buy Now</BuyButton>
            </ProductInfo>
          </Product>
        ))}
      </Arrows>
    </Container>
  );
}

export default Hero;

const Container = styled.div``;

const Arrows = styled.div``;

const Product = styled.div``;

const ProductImg = styled.img``;
const ProductInfo = styled.div``;
const Title = styled.h1``;
const Description = styled.p``;
const Price = styled.h2``;
const ImgGalery = styled.div``;
const BuyButton = styled.button``;
