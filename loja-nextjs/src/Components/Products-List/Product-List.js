import React from 'react';
import { Lista, Card, Wrapper } from './Product-List.style';

const ProductList = ({ Title, produtos }) => {
  return produtos ? (
    <Wrapper className="Container">
      <h1>{Title}</h1>
      <Lista>
        {produtos.map((produto) => {
          return (
            <a href={'/produto/' + produto.id} key={produto.id}>
              <Card>
                <div className="image">
                  <img
                    src={'http://localhost:1337' + produto.images[0].url}
                    alt={produto.name}
                  />
                </div>
                <div className="info">
                  <p>Descrição do que é isso aqui</p>
                  <b>R$ 1.955,90</b>
                  <span>3x R$ 516,35 sem juros</span>
                </div>
              </Card>
            </a>
          );
        })}
      </Lista>
    </Wrapper>
  ) : null;
};

export default ProductList;
