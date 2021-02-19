import React from 'react';
import MenuItem from '../Menu/Menu';
import Link from 'next/link';
import {
  Header as Head,
  Marca,
  Navegacao,
  BotaoHambClosed,
  BotaoHambOpen,
} from './Header.style';
import { ICategoria } from '../../Interfaces/ICategoria';

interface HeaderProps{
  dataHeader: [ICategoria]
}

const Header: React.FC<HeaderProps> = ({ dataHeader }) => {
  const [MenuState, setMenuState] = React.useState(false);

  return (
    <Head className="Container">
      <Link href="/">
        <a>
          <Marca>
            <span>S</span>troncio
          </Marca>
        </a>
      </Link>

      {MenuState === false ? (
        <BotaoHambClosed onClick={() => setMenuState(!MenuState)}>
          <div></div>
          <div></div>
          <div></div>
        </BotaoHambClosed>
      ) : (
        <BotaoHambOpen onClick={() => setMenuState(!MenuState)}>
          <div></div>
          <div></div>
        </BotaoHambOpen>
      )}
      <Navegacao MenuState={MenuState}>
        <ul>
          <MenuItem Nome="Produtos" link="produtos" Options={dataHeader} />
          <MenuItem Nome="Contato" link="contato" />
          <MenuItem Nome="Sobre Nós" link="sobre" />
        </ul>
      </Navegacao>
    </Head>
  );
};

export default Header;
