import styled from 'styled-components';

export const Item = styled.li`
  width: 150px;
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`;
interface InnerMenuProps{
  MenuState: boolean
}

export const InnerMenu = styled.nav<InnerMenuProps>`
  position: absolute;
  width: 200px;
  background: white;
  border: 1px solid #222;
  display: block;
  border-radius: 3px;
  top: 50px;
  left: 30px;
  transition: 0.2s;
  visibility: ${({ MenuState }) => (MenuState === true ? 'visible' : 'hidden')};
  opacity: ${({ MenuState }) => (MenuState === true ? '1' : '0')};
  transform: ${({ MenuState }) =>
    MenuState === true ? 'translateY(0px)' : 'translateY(-10px)'};

  @media (max-width: 850px) {
    display: none;
  }

  li {
    width: 100%;
    cursor: pointer;
    padding: 0;
    padding: 10px 5px;
    position: relative;
  }
`;
