import axios from 'axios';
import { IProduto } from '../Interfaces/Iproduto';


export const getProdutosCategoria = async (id: string): Promise<[IProduto]> => {
  const response = await axios.get('http://localhost:1337/produtos?categoria.id=' + id);
  return response.data 
};
