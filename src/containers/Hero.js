import React from 'react';
import styled from 'styled-components';
import ProductData from '../data/ProductData';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Hero({ closeBurger }) {
  return (
    <Container onClick={closeBurger}>
      <Arrows>
        <ArrowForwardIosIcon className='left' />
        <ArrowForwardIosIcon className='right' />
      </Arrows>
      {ProductData.map((item) => (
        <Product>
          {item.img.map((image) => (
            <ProductImg>
              <img src={Object.values(image)[0]} />
            </ProductImg>
          ))}

          <ProductInfo>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <Price>{item.price}</Price>

            {item.img.map((image) => (
              <ImgGalery>
                <img src={Object.values(image)[0]} />
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
  padding-top: 50px;
  background: #70543f;
  height: 550px;
  width: 100%;
  display: flex;
  color: #ffeeee;
  position: relative;
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

const ProductImg = styled.div`
  padding: 0px;
  border: 2px solid rgba(217, 200, 180, 0.75);
  border-radius: 15px;
  margin-left: 50px;
  margin-right: 10px;

  img {
    max-width: 100%;
    height: auto;
    max-height: 700px;
    margin-bottom: -4px;
  }
`;

const Product = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 0;
  margin-left: 10px;
`;

const ProductInfo = styled.div`
  /* padding-top: 10px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50px;
  max-width: 400px;
  @media (max-width: 1050px) {
    /* margin-left: 20px; */
  }
`;

const Title = styled.h1`
  font-size: 50px;

  @media (max-width: 1000px) {
    font-size: 45px;
  }
  @media (max-width: 820px) {
    font-size: 35px;
  }
  @media (max-width: 730px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;

 
   @media (max-width: 1000px) {
    font-size: 18px;
    @media (max-width: 820px) {
    font-size: 15px;
  }
  @media (max-width: 730px) {
    font-size: 12px;
  }
`;

const Price = styled.h2`
  font-size: 40px;
  margin-top: 40px;

  @media (max-width: 1000px) {
    font-size: 35px;
  }
  @media (max-width: 820px) {
    font-size: 30px;
  }
  @media (max-width: 730px) {
    font-size: 25px;
  }
`;

const ImgGalery = styled.div`
  padding-top: 30px;

  img {
    max-width: 15%;
    height: auto;
    border: 2px solid rgba(217, 200, 180, 0.75);
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
