import { Img, Botao, Link, Fashion, Luxury, And, Acessories } from "./styles";
import Cabecalho from "../../components/header";
import ProdutoItem from "../../components/ProdutoItem/ProdutoItem";
import homeImg from "../../img/imgHome.jpg";
import produtos from "../../services/produtos.json";
import Container from "../../components/ContainerProdutos";

import Rodape from "../../components/footer";
import { Divisor } from "../../components/divisor/Divisor";

function Home() {
  return (
    <>
      <Cabecalho />

      <main>
        <section>
          <Luxury>Luxury</Luxury>
          <Fashion>Fashion</Fashion>
          <And>&</And>
          <Acessories>Acessories</Acessories>
          <Img src={homeImg} alt="Home" />
          <Botao>EXPLORAR COLEÇÃO</Botao>
        </section>

        <Divisor />

        <Container style={{'display':'grid', 'margin':'0 auto'}}>
          {produtos.map((produto, index) => (
            <ProdutoItem
              key={index}
              src={produto.src}
              preco={produto.preco}
              titulo={produto.titulo}
            />
          ))}
        </Container>

        <Link href="#">
          Explore Mais 
        </Link>
      </main>
      <Rodape />
    </>
  );
}

export default Home;
