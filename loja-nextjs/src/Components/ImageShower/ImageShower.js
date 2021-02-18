import React from 'react';
import { Wrapper, ContainerMain, ContainerImages } from './ImageShower.style';

const ImageShower = ({ images }) => {
  const [imageActive, setimageActive] = React.useState(0);

  return (
    <Wrapper className="Container">
      <ContainerImages>
        {images &&
          images.map((image, index) => {
            return (
              <img
                src={'http://localhost:1337' + image.url}
                alt={image.name}
                key={image.id}
                onClick={() => setimageActive(index)}
              />
            );
          })}
      </ContainerImages>

      <ContainerMain>
        <img src={'http://localhost:1337' + images[imageActive].url} alt="" />
      </ContainerMain>
    </Wrapper>
  );
};

export default ImageShower;
