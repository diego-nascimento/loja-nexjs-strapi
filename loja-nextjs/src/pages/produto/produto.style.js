import styled from 'styled-components';

export const Container = styled.aside`
  margin: 50px 0px;
  padding: 0px 20px;
  justify-content: center;

  .Path {
    margin-bottom: 20px;
    width: 100%;
    span {
      margin-left: 10px;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Information = styled.div`
  margin-top: 50px;
  width: 100%;

  p {
    font-size: 1.5rem;
  }

  img {
    width: 100%;
  }
  @media (max-width: 800px) {
    margin: 50px 0px;
  }
`;
