import axios from 'axios';

export const getCategorias = async () => {
  return await axios.get('http://localhost:1337/categorias');
};
