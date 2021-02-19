import type {NextApiRequest, NextApiResponse} from 'next'
import {getProduto} from '../../../Util/getProdutos'


const handler = async (req: NextApiRequest, res: NextApiResponse) =>{
  
  const {query: { id}} = req;
  const response = await getProduto(id);
  return res.status(400).json(response)
}

export default handler