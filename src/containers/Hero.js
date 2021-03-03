import React from 'react';
import styled from 'styled-components';
import ProductData from '../data/ProductData';

function Hero({ closeBurger }) {
  return (
    <Container onClick={closeBurger}>
      <Arrows></Arrows>
      {ProductData.map((item) => (
        <Product>
          {item.img.map((image) => (
            <ProductImg src={image.img1}></ProductImg>
          ))}

          <ProductInfo>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <Price>{item.price}</Price>

            {item.img.map((image) => (
              <ImgGalery>
                <img src={image.img1} />
              </ImgGalery>
            ))}

            <BuyButton>Buy Now</BuyButton>
          </ProductInfo>
        </Product>
      ))}
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  background: #70543f;
  height: 550px;
  width: 100%;
  /* border: solid 7px #000000; */
  display: flex;
  align-items: flex-end;
  color: #ffeeee;
`;

const Arrows = styled.div``;

const Product = styled.div`
  display: flex;
  width: 100%;
  /* border: solid 2px yellow; */
  justify-content: space-evenly;
`;

const ProductImg = styled.img`
  max-width: 80%;
  height: auto;
  /* border: solid 7px #000000; */
`;
const ProductInfo = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50px;
  /* border: solid 7px #000000; */
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Description = styled.p`
  /* width: 86%; */
  margin-top: 40px;
`;
const Price = styled.h2`
  font-size: 40px;
  margin-top: 40px;
`;
const ImgGalery = styled.div`
  padding-top: 30px;

  img {
    max-width: 30%;
    height: auto;
    border: solid 2px rgba(217, 200, 180, 0.75);
    border-radius: 15px;
    padding: 5px 5px 0px 0px;
    transition: ease-in-out 0.15s;
    cursor: pointer;
    :hover {
      background: rgba(255, 238, 238, 0.15);
      border: solid 2px rgba(255, 238, 238, 1);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
`;
const BuyButton = styled.button`
  margin-top: 50px;
  margin-bottom: 50px;
  background: none;
  border: none;
  color: rgba(255, 238, 238, 1);
  font-size: 22px;
  border: 1px solid rgba(255, 238, 238, 0.5);
  padding: 10px;
  transition: ease-in 0.2s;
  border-radius: 15px;
  outline: none;
  cursor: pointer;

  :hover {
    background: rgba(255, 238, 238, 0.15);
    border: solid 1px rgba(255, 238, 238, 1);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
