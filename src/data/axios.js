import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6059f463b11aba001745d2fe.mockapi.io',
});

export default instance;
