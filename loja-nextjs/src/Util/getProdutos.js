import axios from 'axios';

export const getProdutos = async () => {
  return await axios.get('http://localhost:1337/produtos');
};

export const getProduto = async (id) => {
  return await axios.get('http://localhost:1337/produtos?id=' + id);
};
