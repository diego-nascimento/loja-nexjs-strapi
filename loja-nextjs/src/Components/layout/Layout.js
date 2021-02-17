import React from 'react';
import Header from '../Header/Header';
import { Container } from './Layout.style';

const Layout = ({ children, dataHeader }) => {
  return (
    <Container>
      <Header dataHeader={dataHeader} />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
