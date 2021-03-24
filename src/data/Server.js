import React from 'react';
import Axios from 'axios';

axios.defaults.baseURL = 'https://6059f463b11aba001745d2fe.mockapi.io';

export const leftProducts = [];

const populateData = (data) => {
  leftProducts.push.apply(leftProducts, data);
};

export const getProducts = async () => {
  try {
    const res = await axios.get('/products');
    populateData(res.data);
  } catch (err) {
    console.log(err);
  }
};
getProducts();

const config = {
  data: {
    description: 'Casual line, Short design. 100% suede leather. Elbow patche.',
    id: '6',
    img:
      'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg',
    name: 'Best shoes in the world',
    price: '49.99',
  },
  headers: {
    'content-type': 'aplication/json',
  },
};

export const postProducts = () => {
  axios
    .post('/products', config)
    .then((res) => console.log(res.data))
    .catch((res) => console.log(res));
};

export const putProducts = async () => {
  try {
    const res = await axios.put('/products/6', {
      description: 'Machietaaae',
      id: '7',
      img:
        'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg',
      name: 'Mami queaaa sera lo que quiere el negro',
      price: '69.69',
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const delProducts = () => {
  axios.delete('/products/6').then((res) => console.log(res.status));
};

// export const multiple = () => {
//   Promise.all([
//     axios.get('https://6059f463b11aba001745d2fe.mockapi.io/products'),
//     axios.post('https://6059f463b11aba001745d2fe.mockapi.io/products', config),
//   ]).then((res) => console.log(res[0], res[1]));
// };
