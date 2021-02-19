import React from 'react';
import { Lista, Wrapper, Button } from './PreviewProductList.style';
import CardProduto from '../CardProduto/CardProduto';
import { IProduto } from '../../Interfaces/Iproduto';
import Link from 'next/link'

interface ProductListProps{
  Title: String,
  produtos: [IProduto],
  url: string
}

const PreviewProductList: React.FC<ProductListProps> = ({ Title, produtos, url }) => {
  return produtos ? (
    <Wrapper>
      <h1>{Title}</h1>
      <Lista className="Container">
        {produtos.map((produto, index) => {
          return(
            index < 6 ? <Link href={'http://localhost:3000/produto/' + produto.id}
            key={produto.id}>
              <a> <CardProduto produto={produto} /></a>
            </Link>: null
          )
        })}
      </Lista>
      <Link href={'/' + url.toLowerCase()}>
        <a><Button>Ver Mais</Button></a>
      
      </Link>
      
    </Wrapper>
  ) : null;
};

export default PreviewProductList;
