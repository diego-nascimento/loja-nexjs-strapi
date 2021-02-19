import { GetStaticProps } from 'next';
import React from 'react';
import { ICategoria } from '../Interfaces/ICategoria';
import Layout from '../Components/layout/Layout'
import { getCategorias } from '../Util/getCategorias';


interface ContatoImplementationProps {
  data: [ICategoria];
}

const Contato: React.FC<ContatoImplementationProps> = ({data}) => {
  return (
    <Layout dataHeader={data}>

    </Layout>
     
    
  );
};

export default Contato;


interface GetStaticPropsReturn {
  props: ContatoImplementationProps;
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsReturn> => {
  const response = await getCategorias();
  console.log(response)
  return {
    props: { data: response },
  };
};
