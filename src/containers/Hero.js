import React from 'react';

function Hero({ closeBurger }) {
  return (
    <div onClick={closeBurger}>
      <h1>Hero</h1>
    </div>
  );
}

export default Hero;
