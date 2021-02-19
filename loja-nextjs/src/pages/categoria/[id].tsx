import React from 'react';
import Layout from '../../Components/layout/Layout';
import { getCategorias } from '../../Util/getCategorias';
import { getProdutosCategoria } from '../../Util/getProdutosCategoria';
import ProductList from '../../Components/Products-List/Product-List';
import Head from 'next/head';
import {ICategoria} from '../../Interfaces/ICategoria'
import {IProduto} from '../../Interfaces/Iproduto'

interface ICategoriaProps{
  dataHeader: [ICategoria]
  produtos: [IProduto]
}

const Categoria: React.FC<ICategoriaProps> = ({ dataHeader, produtos }) => {
  return (
    produtos && produtos.length > 0?
    <Layout dataHeader={dataHeader}>
      <Head>
        <title>{produtos[0].categoria.name}</title>
      </Head>
      {produtos && produtos.length > 0 ? (
        <ProductList Title={produtos[0].categoria.name} produtos={produtos} />
      ) : null}
    </Layout>: null
  );
};

export default Categoria;

export async function getStaticPaths() {
  const response = await getCategorias();
  const data = response;
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

interface StaticPropsReturn{
  props: ICategoriaProps
}

interface Params{
  params:{
    id: string
  }
}

export const getStaticProps: any  = async ({params}: Params):Promise<StaticPropsReturn>  => {
  const response = await getCategorias();
  const produtos = await getProdutosCategoria(params.id);
  return {
    props: { dataHeader: response, produtos: produtos },
  };
}
