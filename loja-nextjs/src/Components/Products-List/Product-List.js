import React from 'react';
import { Lista, Card, Wrapper, Button } from './Product-List.style';

const Images = [
  { url: '/painel.jpg', alt: 'Imagem Promocional' },
  { url: '/painel.jpg', alt: 'Imagem Promocional' },
  { url: '/painel.jpg', alt: 'Imagem Promocional' },
  { url: '/painel.jpg', alt: 'Imagem Promocional' },
  { url: '/painel.jpg', alt: 'Imagem Promocional' },
  { url: '/painel.jpg', alt: 'Imagem Promocional' },
];

const ProductList = ({ Title, url }) => {
  return (
    <Wrapper className="Container">
      <h1>{Title}</h1>
      <Lista>
        {Images.map((image, index) => {
          return (
            <a href={'/produto/' + index} key={index}>
              <Card>
                <div className="image">
                  <img src={image.url} alt={image.alt} />
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
      <a href={'/' + url}>
        <Button>Ver Mais</Button>
      </a>
    </Wrapper>
  );
};

export default ProductList;
