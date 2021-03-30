import React from 'react';
import styled from 'styled-components';
function Footer() {
  return <Foooter>All rights reserved.</Foooter>;
}

export default Footer;

const Foooter = styled.footer`
  grid-area: footer;
  background-color: #ffeeee;
  color: #4d3728;
  display: flex;
  justify-content: center;
  align-items: center;
`;
