import React from 'react';
import Header from '../Header/Header';
import { Container } from './Layout.style';
import Footer from '../Footer/Footer';

const Layout = ({ children, dataHeader }) => {
  return (
    <Container>
      <Header dataHeader={dataHeader} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
