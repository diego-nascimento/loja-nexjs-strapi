import React from 'react';
import Layout from '../../Components/layout/Layout';
import Head from 'next/head';
import { getProdutos, getProduto } from '../../Util/getProdutos';
import { getCategorias } from '../../Util/getCategorias';
import ImageShower from '../../Components/ImageShower/ImageShower';
import { Container, Information } from './produto.style';
import Link from 'next/link';
import marked from 'marked'
import { getNovidades } from '../../Util/getNovidades';
import ProductList from '../../Components/Products-List/Product-List';
import { ICategoria } from '../../Interfaces/ICategoria';
import { IProduto } from '../../Interfaces/Iproduto';
import { GetStaticPaths,  } from 'next';
import PreviewProductList from '../../Components/PreviewProductList/PreviewProductList';

interface ProdutoProps{
  data: [ICategoria],
  produto:IProduto,
  novidades: [IProduto]
}

const Produto: React.FC<ProdutoProps> = ({ data, produto, novidades }) => {
  return produto && produto? (
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
          {marked(produto.description)} 
        </Information>

        {novidades && novidades.length > 0 ? (
          <PreviewProductList
            Title="Veja também nossas novidades!"
            url="novidades"
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

export const getStaticPaths: GetStaticPaths = async () =>  {
  const data = await getProdutos();
  const paths = data.map((produto: IProduto) => {
    const value = produto.id.toString();
    return {
      params: {
        id: value
      },
    }
  });
  return {
    paths: paths,
    fallback: false,
  };
}

interface GetStaticPropsReturn{
  props: ProdutoProps
}

interface Params{
  params:{
    id: string
  }
}

export const getStaticProps:any = async ({params}: Params ): Promise<GetStaticPropsReturn> => {
  
  const response = await getCategorias();
  const data = response;
  let produto = await getProduto(params.id);
  produto.description = (produto.description
    .split('/uploads')
    .join('http://localhost:1337/uploads'));

  const novidades = await getNovidades();

  return {
    props: { data, produto: produto, novidades: novidades },
  };
}
