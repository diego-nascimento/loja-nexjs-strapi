import React from 'react';
import Layout from '../Components/layout/Layout';
import { getCategorias } from '../Util/getCategorias';
import ProductList from '../Components/Products-List/Product-List';
import Head from 'next/head';
import {ICategoria} from '../Interfaces/ICategoria'
import {IProduto} from '../Interfaces/Iproduto'
import { getNovidades } from '../Util/getNovidades';

interface INovidadesProps{
  dataHeader: [ICategoria]
  produtos: [IProduto]
}

const Novidades: React.FC<INovidadesProps> = ({ dataHeader, produtos }) => {
  return (
    produtos && produtos.length > 0?
    <Layout dataHeader={dataHeader}>
      <Head>
        <title>"Novidades"</title>
      </Head>
      {produtos && produtos.length > 0 ? (
        <ProductList Title={'Novidades'} produtos={produtos} />
      ) : null}
    </Layout>: null
  );
};

export default Novidades;


interface StaticPropsReturn{
  props: INovidadesProps
}


export const getStaticProps: any  = async ():Promise<StaticPropsReturn>  => {
  const response = await getCategorias();
  const produtos = await getNovidades();
  return {
    props: { dataHeader: response, produtos: produtos },
  };
}
