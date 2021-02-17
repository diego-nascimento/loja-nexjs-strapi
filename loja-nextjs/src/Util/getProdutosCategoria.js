import axios from 'axios';

export const getProdutosCategoria = async (id) => {
  return await axios.get('http://localhost:1337/produtos?categoria.id=' + id);
};
