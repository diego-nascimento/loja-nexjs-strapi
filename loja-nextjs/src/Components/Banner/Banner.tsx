import React from 'react';
import { Wrapper } from './Banner.style';

interface BannerProps {
  urlImage: string;
  link: string;
}

const Banner: React.FC<BannerProps> = ({ urlImage, link }) => {
  return (
    <Wrapper className="Container">
      {urlImage ? (
        <a href={'/' + link}>
          <img src={urlImage} alt={link}  />
        </a>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Espaço para colocar um banner</h1>
      )} 
    </Wrapper>
  );
};

export default Banner;
