import React from 'react';
import Layout from '../Components/layout/Layout';
import { getProdutos } from '../Util/getProdutos';
import { getCategorias } from '../Util/getCategorias';

const produtos = ({ Header, produtos }) => {
  return (
    <Layout dataHeader={Header}>
      {produtos &&
        produtos.map((produto) => {
          return <h1 key={produto.id}>{produto.name}</h1>;
        })}
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
