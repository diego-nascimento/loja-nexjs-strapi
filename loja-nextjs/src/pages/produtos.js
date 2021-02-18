import React from 'react';
import Layout from '../Components/layout/Layout';
import { getProdutos } from '../Util/getProdutos';
import { getCategorias } from '../Util/getCategorias';
import ProductList from '../Components/Products-List/Product-List';
import Head from 'next/head';

const produtos = ({ Header, produtos }) => {
  return (
    <Layout dataHeader={Header}>
      <Head>
        <title>Produtos</title>
      </Head>
      {produtos ? <ProductList Title="Produtos" produtos={produtos} /> : null}
    </Layout>
  );
};

export default produtos;

export async function getStaticProps(context) {
  const response = await getCategorias();
  const produtos = await getProdutos();
  const Header = response.data;
  return {
    props: { Header, produtos: produtos.data },
  };
}
