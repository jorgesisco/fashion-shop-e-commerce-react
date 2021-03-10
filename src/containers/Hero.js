import React, { useState } from 'react';
import styled from 'styled-components';
import FeaturedProducts from '../data/ProductData';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Hero({ closeBurger, closeUserMenu }) {
  // useState function that lets me set current
  // to show looped products on hero function

  const [current, setCurrent] = useState(0);
  const length = FeaturedProducts.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(FeaturedProducts) || FeaturedProducts.length <= 0) {
    return null;
  } //In case there are not products in the data base,
  //  it won't show the hero section!!!

  return (
    <Container onClick={closeBurger} onClick={closeUserMenu}>
      <Arrows onClick={closeBurger}>
        <ArrowForwardIosIcon className='left' onClick={prevSlide} />
        <ArrowForwardIosIcon className='right' onClick={nextSlide} />
      </Arrows>

      <ProductItem className='item-circle'>
        {FeaturedProducts.map((item, index) => (
          <FiberManualRecordIcon
            className={index === current ? 'icon-current' : 'icon'}
          />
        ))}
      </ProductItem>

      {FeaturedProducts.map((item, index) => (
        <Product
          className={index === current ? 'slide-active' : 'slide'}
          key={index}
          onClick={closeBurger}
        >
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
                <img src={Object.values(image)[1]} />
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

  .slide {
    display: none;
  }
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
  border: 2px solid rgba(217, 200, 180, 0.75);
  border-radius: 15px;
  margin-left: 50px;
  margin-right: 10px;
  padding: 5px 5px 5px 5px;

  img {
    max-width: 100%;
    height: auto;
    max-height: 500px;
    margin-bottom: -4px;
    border-radius: 15px;
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
  }
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
    padding: 2px 2px 2px 2px;
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
