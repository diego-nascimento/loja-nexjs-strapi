import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 130px 1fr;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerMain = styled.section`
  width: 100%;

  img {
    width: 100%;
    max-height: 500px;
  }
`;

export const ContainerImages = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 0px;
    overflow-x: scroll;
  }

  img {
    width: 100%;
    max-width: 200px;
  }
`;
