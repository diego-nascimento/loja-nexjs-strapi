import type {NextApiRequest, NextApiResponse} from 'next'
import { getProdutos } from '../../Util/getProdutos'

const handler = async (req: NextApiRequest, res: NextApiResponse) =>{
  const response = await getProdutos();
  return res.status(400).json(response)
}

export default handler