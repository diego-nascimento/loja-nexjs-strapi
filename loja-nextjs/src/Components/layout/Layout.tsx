import React from 'react';
import Header from '../Header/Header';
import { Container } from './Layout.style';
import Footer from '../Footer/Footer';
import { ICategoria } from '../../Interfaces/ICategoria';


interface LayoutProps{
  children: any,
  dataHeader: [ICategoria]
}

const Layout: React.FC<LayoutProps> = ({ children, dataHeader }) => {
  return (
    <Container>
      <Header dataHeader={dataHeader} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
