import {ICategoria} from './ICategoria'
import {IImage} from './IImage'
import { IMarca } from './IMarca'


export interface IProduto{
  id: number,
  name: string,
  description: string,
  resume: string
  images: [IImage]
  categoria: ICategoria
  marca: IMarca
}