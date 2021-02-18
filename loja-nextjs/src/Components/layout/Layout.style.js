import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;

  justify-content: space-between;

  main {
    width: 100vw;
    height: 100%;
    min-height: 90vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: stretch;
  }
`;
