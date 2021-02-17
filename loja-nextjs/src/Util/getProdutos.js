import axios from 'axios';

export const getProdutos = async () => {
  return await axios.get('http://localhost:1337/produtos');
};
