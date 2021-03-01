import React from 'react';
import styled from 'styled-components';
import { HeaderData_1, HeaderData_2, BurgerIcon } from '../data/Header_data';

function Header() {
  return (
    <Container>
      <Logo>FASHION SHOP</Logo>
      <NavItems>
        {HeaderData_2.map((item) => (
          <NavItem>{item.text}</NavItem>
        ))}
      </NavItems>
      {BurgerIcon.map((item) => (
        <Burger>{item.text}</Burger>
      ))}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px 0px 0px 75px;
`;

const Logo = styled.div`
  cursor: pointer;
  font-size: 22px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
  padding: 0;

  @media (max-width: 820px) {
    display: none;
  }
`;

const NavItem = styled.div`
  margin-right: 40px;
  cursor: pointer;
`;

const Burger = styled.div`
  margin-right: 90px;
  cursor: pointer;
  @media (min-width: 820px) {
    display: none;
  }
`;
