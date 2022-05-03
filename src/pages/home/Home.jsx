import styled from "styled-components";
import Cabecalho from "../../components/header";
import homeImg from "../../img/imgHome.jpg";

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

function Home() {
  return (
    <>
      <Cabecalho />
      <Img src={homeImg} alt="Home" />
      <Botao>EXPLORAR COLEÇÃO</Botao>
    </>
  );
}

export default Home;
