import Layout from '../Components/layout/Layout';
import Painel from '../Components/Painel/Painel';
import Banner from '../Components/Banner/Banner';
import ProductList from '../Components/Products-List/Product-List';
import { getCategorias } from '../Util/getCategorias';
import { getNovidades } from '../Util/getNovidades';
import Head from 'next/head';

export default function Home({ data, novidades }) {
  return (
    <Layout dataHeader={data}>
      <Head>
        <title>Home</title>
      </Head>
      <Painel />
      {novidades && novidades.length > 0 ? (
        <ProductList Title="Novidades" url={null} produtos={novidades} />
      ) : null}

      <Banner urlImage={null} link={null} />
      <ProductList Title="Ofertas" url={null} what="Ofertas" />
      <ProductList Title="Mais Vendidos" url={null} what="MaisVendidos" />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const response = await getCategorias();
  const data = response.data;

  const novidades = await getNovidades();

  return {
    props: { data, novidades: novidades.data },
    revalidate: 5,
  };
}
