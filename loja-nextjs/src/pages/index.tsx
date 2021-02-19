import Layout from '../Components/layout/Layout';
import Painel from '../Components/Painel/Painel';
import Banner from '../Components/Banner/Banner';
import PreviewProductList from '../Components/PreviewProductList/PreviewProductList';
import { getCategorias } from '../Util/getCategorias';
import { getNovidades } from '../Util/getNovidades';
import Head from 'next/head';
import {GetStaticProps} from 'next'

import { ICategoria } from '../Interfaces/ICategoria';
import {IProduto} from '../Interfaces/Iproduto'

interface IndexProps {
  data: [ICategoria],
  novidades: [IProduto]
}

const Home:  React.FC<IndexProps> = ({ data, novidades }) =>{
  return (
    <Layout dataHeader={data}>
      <Head>
        <title>Home</title>
      </Head>
      <Painel />
      {novidades && novidades.length > 0 ? (
        <PreviewProductList Title="Novidades"  produtos={novidades} url="novidades" />
      ) : null}

      <Banner urlImage={'teste'} link={'slug'} />
    </Layout>
  );
}

export default Home

interface GetStaticPropsReturn{
  props: IndexProps,
}

export const getStaticProps: GetStaticProps = async (context):Promise<GetStaticPropsReturn> => {
  const response = await getCategorias();
  const novidades = await getNovidades();
  return {
    props: { data: response, novidades: novidades },
  };
}
