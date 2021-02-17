import React from 'react';
import { Image, CarouselMod } from './Painel.style';
import { Carousel } from 'react-bootstrap';

const Images = [
  {
    url:
      'https://static.vecteezy.com/ti/vetor-gratis/p1/524773-banner-extra-largo-de-venda-de-verao-vetor.jpg',
    alt: 'Imagem Promocional',
  },
  {
    url:
      'https://static.vecteezy.com/ti/vetor-gratis/p1/524773-banner-extra-largo-de-venda-de-verao-vetor.jpg',
    alt: 'Imagem Promocional',
  },
  {
    url:
      'https://static.vecteezy.com/ti/vetor-gratis/p1/524773-banner-extra-largo-de-venda-de-verao-vetor.jpg',
    alt: 'Imagem Promocional',
  },
];

const Painel = () => {
  return (
    <Carousel controls={false} touch={true}>
      {Images.map((image, index) => {
        return (
          <Carousel.Item key={index}>
            <Image src={image.url} alt={image.alt} className={'Container'} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Painel;
