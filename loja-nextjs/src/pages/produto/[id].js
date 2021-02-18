import React from 'react';
import Layout from '../../Components/layout/Layout';
import Head from 'next/head';
import { getProdutos, getProduto } from '../../Util/getProdutos';
import { getCategorias } from '../../Util/getCategorias';
import ImageShower from '../../Components/ImageShower/ImageShower';
import { Container, Information } from './produto.style';
import Link from 'next/link';
import { MarkdownPreview } from 'react-marked-markdown';
import { getNovidades } from '../../Util/getNovidades';
import ProductList from '../../Components/Products-List/Product-List';

const Produto = ({ data, produto, novidades }) => {
  return produto ? (
    <Layout dataHeader={data}>
      <Head>
        <title>{produto.name}</title>
      </Head>
      <Container className="Container">
        <div className="Path">
          <span>
            <Link href="/">
              <a> Inicio</a>
            </Link>
          </span>
          <span>
            /
            <Link
              href={'http://localhost:3000/categoria/' + produto.categoria.id}
            >
              <a> {produto.categoria.name}</a>
            </Link>
          </span>
          <span>
            / <b> {produto.name}</b>
          </span>
        </div>
        <ImageShower images={produto.images} />
        <Information>
          <h1>{produto.name}</h1>
          <MarkdownPreview value={produto.description} />
        </Information>

        {novidades && novidades.length > 0 ? (
          <ProductList
            Title="Veja também nossas novidades!"
            url={null}
            produtos={novidades}
          />
        ) : null}
      </Container>
      <Head>
        <title>{produto.name} </title>
      </Head>
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
  let produto = await getProduto(context.params.id);
  produto.data[0].description = produto.data[0].description
    .split('/uploads')
    .join('http://localhost:1337/uploads');

  const novidades = await getNovidades();

  return {
    props: { data, produto: produto.data[0], novidades: novidades.data },
  };
}
