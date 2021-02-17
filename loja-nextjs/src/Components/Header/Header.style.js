import styled from 'styled-components';

export const Header = styled.header`
  height: 90px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;

  @media (max-width: 880px) {
    flex-direction: row-reverse;
  }
`;

export const Marca = styled.h1`
  display: flex;
  align-items: center;
  text-decoration: none;

  span {
    font-size: 50px;
    color: #6ca758;
    padding: 5px 10px;
    margin-right: 5px;
    box-shadow: 2px 3px 10px black;
  }
`;

export const Navegacao = styled.nav`
  z-index: 98;

  ul {
    display: flex;
    @media (max-width: 880px) {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      transition: 0.5s;
      transform: ${(props) =>
        props.MenuState === false ? 'translateX(-100%)' : 'translateX(0%)'};
      position: absolute;
      padding-top: 90px;
      top: 0px;
      left: 0px;
      width: 400px;
      max-width: 300px;
      height: 100vh;
      align-items: center;
      background: white;

      li {
        border-bottom: 1px solid #aaa;
        width: 100%;

        :first-child {
          border-top: 1px solid #aaa;
        }
      }
    }
  }
`;

export const BotaoHambOpen = styled.div`
  display: none;

  flex-direction: column;
  z-index: 99;
  width: 40px;
  height: 40px;
  transition: 0.1s;
  :hover {
    transform: scale(1.05);
  }
  @media (max-width: 880px) {
    display: flex;
    cursor: pointer;
    position: fixed;
    top: 10px;
    left: 20px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;

    div {
      width: 30px;
      height: 3px;
      background: #111;
      transition: 0.3s;
      position: relative;
      top: -13px;
      left: 5px;

      :first-child {
        transform: rotateZ(45deg);
      }
      :nth-child(2) {
        transform: rotateZ(-45deg) translateY(-1px) translateX(3px);
      }
    }
  }
`;

export const BotaoHambClosed = styled.div`
  display: none;
  flex-direction: column;
  z-index: 99;
  padding: 10px 10px;

  @media (max-width: 880px) {
    display: flex;
    cursor: pointer;
    position: fixed;
    top: 10px;
    left: 20px;
  }

  :hover {
    div:nth-child(2) {
      width: 30px;
    }

    div:nth-child(3) {
      width: 30px;
    }
  }

  div {
    width: 30px;
    height: 3px;
    background: #111;
    margin-top: 5px;
    transition: 0.3s;
  }

  div:nth-child(2) {
    width: 15px;
  }

  div:nth-child(3) {
    width: 25px;
  }
`;
