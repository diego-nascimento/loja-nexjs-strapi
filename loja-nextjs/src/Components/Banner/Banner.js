import React from 'react';
import { Wrapper } from './Banner.style';

const Banner = ({ urlImage, link }) => {
  return (
    <Wrapper className="Container">
      {urlImage ? (
        <a href={'/' + link}>
          <img src={urlImage} alt={url} srcset="" />
        </a>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Espaço para colocar um banner</h1>
      )}
    </Wrapper>
  );
};

export default Banner;
