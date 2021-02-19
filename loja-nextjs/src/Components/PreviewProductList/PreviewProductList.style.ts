import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
  background-color: #333;
  color: #ddd;
  padding: 30px 0px;
  width: 100%;

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

export const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 1.5rem;
  background: #000f79;
  color: #f9f5ef;
  border: none;
  border-radius: 5px;
`;

