import React from 'react';
import { Card } from './CardProduto.style';
import { Carousel } from 'react-bootstrap';
import { IProduto } from '../../Interfaces/Iproduto';

interface CardProdutoProps{
  produto: IProduto
}


const CardProduto: React.FC<CardProdutoProps> = ({ produto }) => {
  return (
    <Card>
      <div className="image">
        <Carousel
          controls={false}
          touch={true}
          indicators={false}
          fade={true}
          slide={true}
        >
          {produto && produto.images && produto.images.length > 0
            ? produto.images.map((image) => {
                return (
                  <Carousel.Item key={image.id} interval={3000}>
                    <img
                      src={'http://localhost:1337' + image.url}
                      alt={produto.name}
                    />
                    <strong>{produto.name}</strong>
                  </Carousel.Item>
                );
              })
            : null}
        </Carousel>
      </div>
      <div className="info">
        <p>{produto.resume}</p>
      </div>
    </Card>
  );
};

export default CardProduto;
