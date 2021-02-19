import axios from 'axios';
import { IProduto } from '../Interfaces/Iproduto';


export const getProdutos = async ():Promise<[IProduto]>  => {
  const response = await axios.get('http://localhost:1337/produtos'); 
  return response.data;
};


export const getProduto = async (id: string): Promise<[IProduto]> => {
  const response = await axios.get('http://localhost:1337/produtos?id=' + id);
  return response.data[0]
};
