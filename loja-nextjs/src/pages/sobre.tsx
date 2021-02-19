import { GetStaticProps } from 'next';
import React from 'react';
import { ICategoria } from '../Interfaces/ICategoria';
import Layout from '../Components/layout/Layout'
import { getCategorias } from '../Util/getCategorias';


interface SobreImplementationProps {
  data: [ICategoria];
}

const Sobre: React.FC<SobreImplementationProps> = ({data}) => {
  return (
    <Layout dataHeader={data}>

    </Layout>
     
    
  );
};

export default Sobre;


interface GetStaticPropsReturn {
  props: SobreImplementationProps;
}

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsReturn> => {
  const response = await getCategorias();
  console.log(response)
  return {
    props: { data: response },
  };
};
