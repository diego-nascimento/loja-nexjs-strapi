import React from 'react';
import Layout from '../../Components/layout/Layout';
import { getCategorias } from '../../Util/getCategorias';
import { getProdutosCategoria } from '../../Util/getProdutosCategoria';

const Categoria = ({ dataHeader, produtos }) => {
  return (
    <Layout dataHeader={dataHeader}>
      {produtos &&
        produtos.map((produto) => {
          return (
            <div key={produto.id}>
              <img
                src={'http://localhost:1337' + produto.images[0].url}
                alt={produto.name}
              />
              <h1>{produto.name}</h1>
              <p>{produto.description}</p>
            </div>
          );
        })}
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
