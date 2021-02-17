import Layout from '../Components/layout/Layout';
import Painel from '../Components/Painel/Painel';
import Banner from '../Components/Banner/Banner';
import ProductList from '../Components/Products-List/Product-List';
import { getCategorias } from '../Util/getCategorias';

export default function Home({ data }) {
  return (
    <Layout dataHeader={data}>
      <Painel />
      <ProductList Title="Novidades" url={null} what="Novidades" />
      <Banner urlImage={null} link={null} />
      <ProductList Title="Ofertas" url={null} what="Ofertas" />
      <ProductList Title="Mais Vendidos" url={null} what="MaisVendidos" />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const response = await getCategorias();
  const data = response.data;
  return {
    props: { data },
  };
}
