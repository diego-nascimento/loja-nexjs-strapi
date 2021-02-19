import React from 'react';
import Layout from '../Components/layout/Layout';
import { getProdutos } from '../Util/getProdutos';
import { getCategorias } from '../Util/getCategorias';
import ProductList from '../Components/Products-List/Product-List';
import Head from 'next/head';

import { GetStaticProps } from 'next';

import { IProduto } from '../Interfaces/Iproduto';
import {ICategoria} from '../Interfaces/ICategoria'


interface ProdutosProps{
  produtos: [IProduto],
  Header: [ICategoria]
}


const Produtos: React.FC<ProdutosProps> = ({ Header, produtos }: ProdutosProps ) => {
  return (
    <Layout dataHeader={Header}>
      <Head>
        <title>Produtos</title>
      </Head>
      {produtos ? <ProductList Title="Produtos" produtos={produtos} /> : null}
    </Layout>
  );
};

export default Produtos;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await getCategorias();
  const produtos = await getProdutos();
  const Header = response;
  return {
    props: { Header, produtos: produtos },
  };
};
