import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;

  h1 {
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }

    @media (max-width: 600px) {
      font-size: 1.3rem;
    }
  }
`;

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 50px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.li`
  max-width: 700px;
  width: 100%;
  padding: 10px 20px;

  .info {
  }

  p {
    margin: 10px 0px;
  }

  span {
    margin-left: 40px;
  }

  .image {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 1.5rem;
  background: #000f79;
  color: #f9f5ef;
  border: none;
  border-radius: 5px;
`;
