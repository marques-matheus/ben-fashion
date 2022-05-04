import styled from "styled-components";
import Cabecalho from "../../components/header";
import ProdutoItem from "../../components/ProdutoItem/ProdutoItem";
import homeImg from "../../img/imgHome.jpg";
import produtos from "../../services/produtos.json";
import Container from "../../components/ContainerProdutos";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Rodape from "../../components/footer/Footer";

const Img = styled.img`
  margin: 10% 0 10% 0;
  width: 100%;
  height: auto;
`;

const Botao = styled.button`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  color: white;
  width: 240px;
  height: 40px;
  border: none;
  top: 70%;
  left: 22%;
  border-radius: 30px;
  font-size: 16px;

  &:hover {
    transform: scale(1.2);
    transition: 300ms ease-in-out;
  }
`;

const Div = styled.a`
  width: 130px;
  display: flex;
  align-items: center;
  margin: 10% auto;
  justify-content: space-between;
  padding: 12px;
  text-decoration: none;
  color: black;
`;

function Home() {
  return (
    <>
      <Cabecalho />
      <main>
        <Img src={homeImg} alt="Home" />
        <Botao>EXPLORAR COLEÇÃO</Botao>
      </main>

      <Container>
        {produtos.map((produto, index) => (
          <ProdutoItem
            key={index}
            src={produto.src}
            preco={produto.preco}
            titulo={produto.titulo}
          />
        ))}
      </Container>

      <Div href="#">
        Explore Mais <HiOutlineArrowNarrowRight />
      </Div>
      <Rodape />
    </>
  );
}

export default Home;
