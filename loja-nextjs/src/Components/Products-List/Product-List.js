import React from 'react';
import { Lista, Wrapper } from './Product-List.style';
import CardProduto from '../CardProduto/CardProduto';

const ProductList = ({ Title, produtos }) => {
  return produtos ? (
    <Wrapper className="Container">
      <h1>{Title}</h1>
      <Lista>
        {produtos.map((produto) => {
          return (
            <a href={'/produto/' + produto.id} key={produto.id}>
              <CardProduto produto={produto} />
            </a>
          );
        })}
      </Lista>
    </Wrapper>
  ) : null;
};

export default ProductList;
