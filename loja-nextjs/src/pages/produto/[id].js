import React from 'react';
import Layout from '../../Components/layout/Layout';
import Head from 'next/head';
import { getProdutos, getProduto } from '../../Util/getProdutos';
import { getCategorias } from '../../Util/getCategorias';

const Produto = ({ data, produto }) => {
  return produto ? (
    <Layout dataHeader={data}>
      <Head>
        <title>{produto.name} </title>
      </Head>
      <h1>{produto.name}</h1>
      <p>{produto.description}</p>
      {produto.images &&
        produto.images.map((image) => {
          return (
            <img
              src={'http://localhost:1337' + image.url}
              alt={produto.name}
              key={image.id}
            />
          );
        })}
    </Layout>
  ) : null;
};

export default Produto;

export async function getStaticPaths() {
  const response = await getProdutos();
  const data = response.data;
  const paths = data.map((path) => {
    const value = path.id.toString();
    return {
      params: {
        id: value,
      },
    };
  });
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const response = await getCategorias();
  const data = response.data;
  const produto = await getProduto(context.params.id);

  return {
    props: { data, produto: produto.data[0] },
  };
}
