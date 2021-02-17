import React from 'react';
import { Item, InnerMenu } from './Menu.style';
import Link from 'next/link';

const MenuItem = ({ Nome, Options, link }) => {
  const [MenuState, setMenuState] = React.useState(false);

  return (
    <>
      <Item
        onMouseOver={() => setMenuState(true)}
        onMouseLeave={() => setMenuState(false)}
      >
        {link && (
          <Link href={link}>
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
