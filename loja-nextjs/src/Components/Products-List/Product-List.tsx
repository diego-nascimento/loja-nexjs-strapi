import React from 'react';
import { Lista, Wrapper, Header } from './Product-List.style';
import CardProduto from '../CardProduto/CardProduto';
import { IProduto } from '../../Interfaces/Iproduto';
import { IMarca } from '../../Interfaces/IMarca';


interface ProductListProps{
  Title: String,
  produtos: [IProduto]
}



const ProductList: React.FC<ProductListProps> = ({ Title, produtos }) => {
  const [Marcas, setMarcas] = React.useState([])

  React.useEffect(()=>{
    let marcas: Array<IMarca>
    let marcasRepetidas: Array<IMarca>
    marcas = [];
    marcasRepetidas =produtos.map(produto => produto.marca)  ;
    
    
  })

  return produtos ? (
    <Wrapper className="Container">
      <Header><h1>{Title}</h1></Header>
      
      <Lista>
        {produtos.map((produto) => {
          return (
            <a
              href={'http://localhost:3000/produto/' + produto.id}
              key={produto.id}
            >
              <CardProduto produto={produto} />
            </a>
          );
        })}
      </Lista>
    </Wrapper>
  ) : null;
};

export default ProductList;
