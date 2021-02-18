import React from 'react';
import Layout from '../../Components/layout/Layout';
import { getCategorias } from '../../Util/getCategorias';
import { getProdutosCategoria } from '../../Util/getProdutosCategoria';
import ProductList from '../../Components/Products-List/Product-List';

const Categoria = ({ dataHeader, produtos }) => {
  return (
    <Layout dataHeader={dataHeader}>
      {produtos && produtos.length > 0 ? (
        <ProductList Title={produtos[0].categoria.name} produtos={produtos} />
      ) : null}
    </Layout>
  );
};

export default Categoria;

export async function getStaticPaths() {
  const response = await getCategorias();
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
  const produtos = await getProdutosCategoria(context.params.id);
  return {
    props: { dataHeader: response.data, produtos: produtos.data },
  };
}
