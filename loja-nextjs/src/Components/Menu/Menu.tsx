import React from 'react';
import { Item, InnerMenu } from './Menu.style';
import Link from 'next/link';
import { ICategoria } from '../../Interfaces/ICategoria';

interface MenuItemProps{
  Nome: String,
  link: String,
  Options?: [ICategoria]
}

const MenuItem: React.FC<MenuItemProps> = ({ Nome, Options, link }) => {
  const [MenuState, setMenuState] = React.useState(false);

  return (
    <>
      <Item
        onMouseOver={() => setMenuState(true)}
        onMouseLeave={() => setMenuState(false)}
      >
        {link && (
          <Link href={'http://localhost:3000/' + link}>
            <span>{Nome}</span>
          </Link>
        )}

        {Options && (
          <InnerMenu MenuState={MenuState}>
            {Options.map((option, index) => {
              return (
                <Link href={'/categoria/' + option.id} key={index}>
                  <li>
                    <span>{option.name}</span>
                  </li>
                </Link>
              );
            })}
          </InnerMenu>
        )}
      </Item>
    </>
  );
};

export default MenuItem;
