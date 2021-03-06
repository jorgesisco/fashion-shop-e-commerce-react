import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Route } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderData_2, BurgerIcon, Burger_Items } from '../data/Header_data';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';

function Header({
  click_burger,
  troggle_burger,
  closeBurger,
  click_user,
  troggle_user_menu,
}) {
  //

  return (
    <Container>
      <Link onClick={closeBurger} to='/' style={{ textDecoration: 'none' }}>
        <Logo>FASHION SHOP</Logo>
      </Link>

      <NavItems>
        {HeaderData_2.map((item) => (
          <Route>
            <Link style={{ textDecoration: 'none' }} to={item.link}>
              {<NavItem>
                <PersonOutlinedIcon />
              </NavItem> ? (
                <NavItem onClick={troggle_burger}>{item.text}</NavItem>
              ) : (
                <NavItem>{item.text}</NavItem>
              )}
            </Link>
          </Route>
        ))}
      </NavItems>

      <UserContainer>
        {!click_user ? console.log('NOJODAAAAA') : <></>}
      </UserContainer>

      <BurgerContainer onClick={closeBurger}>
        {!click_burger ? (
          HeaderData_2.map((item) => (
            <Route>
              <Link className='link' to={item.link}>
                {<BurgerItem>
                  <PersonOutlinedIcon />
                </BurgerItem> ? (
                  <BurgerItem onClick={troggle_user_menu}>
                    {item.text}
                  </BurgerItem>
                ) : (
                  <BurgerItem>{item.text}</BurgerItem>
                )}
              </Link>
            </Route>
          ))
        ) : (
          <></>
        )}
      </BurgerContainer>

      <Burger onClick={troggle_burger}>
        {BurgerIcon.map((item) => (
          <div>{click_burger ? item.burger : item.burger_open}</div>
        ))}
      </Burger>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px 30px 75px;
  background: #70543f;
  color: #ffeeee;
`;

const Logo = styled.div`
  cursor: pointer;
  color: #ffeeee;

  font-size: 22px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  right: 20px;
  position: absolute;
  @media (max-width: 820px) {
    display: none;
  }
`;

const NavItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
  transition: opacity 0.3s;
  padding: 10px 20px;
  transition: 0.8s;
  border-radius: 15px;
  text-decoration: none;
  color: #ffeeee;

  :hover {
    background: rgba(255, 238, 238, 0.15);
    box-shadow: 0px 0px 3px rgba(255, 238, 238, 1);
  }
`;

const Burger = styled.div`
  margin-right: 90px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 12px;
  cursor: pointer;
  @media (min-width: 821px) {
    display: none;
  }
`;

const BurgerContainer = styled.div`
  position: absolute;
  top: 120px;
  right: 80px;
  border-radius: 20px;
  background: rgba(255, 238, 238, 0.95);

  z-index: 100;
  @media (min-width: 820px) {
    display: none;
    background: #ffeeee;
  }
`;

const BurgerItem = styled.div`
  padding: 15px;
  display: flex;
  text-decoration: none !important;
  cursor: pointer;
  color: rgba(112, 84, 63, 1);
  padding: 15px 100px 20px 20px;
  transition: 0.8s;
  text-decoration: none;

  :hover {
    background: rgba(255, 238, 238, 0.15);
    box-shadow: 0px 0px 3px rgba(255, 238, 238, 1);
  }
`;

const UserContainer = styled.div``;
