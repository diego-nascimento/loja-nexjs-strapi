import axios from 'axios';

export const getNovidades = async () => {
  return await axios.get('http://localhost:1337/produtos?novidade=1');
};
