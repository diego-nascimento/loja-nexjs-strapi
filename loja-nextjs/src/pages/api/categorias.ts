import { NextApiRequest, NextApiResponse } from "next";
import { getCategorias } from "../../Util/getCategorias";

const handler = async(req:NextApiRequest, res: NextApiResponse ) =>{
  const response = await getCategorias()
  return res.status(200).json(response)
}

export default handler