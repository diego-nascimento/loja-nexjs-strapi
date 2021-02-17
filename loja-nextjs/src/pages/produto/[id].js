import React from 'react';
import Layout from '../../Components/layout/Layout';
import Head from 'next/head';

const Produto = ({ data }) => {
  return (
    <Layout dataHeader={data}>
      <Head>
        <title>Produto </title>
      </Head>
    </Layout>
  );
};

export default Produto;

export async function getStaticPaths() {
  const response = await getCategorias();
  const data = response.data;
  const paths = data.map((path) => {
    return {
      params: {
        id: path.id,
      },
    };
  });
  return {
    paths: [
      { params: { paths } }, // See the "paths" section below
    ],
  };
}

export async function getStaticProps(context) {
  const response = await getCategorias();
  const data = response.data;
  return {
    props: { data },
  };
}
