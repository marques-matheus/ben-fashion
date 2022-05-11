import Container from "../../components/ContainerProdutos";
import Cabecalho from "../../components/header";
import categorias from "../../services/categorias.json";
import ProdutoItem from "../../components/ProdutoItem/ProdutoItem";
import Rodape from "../../components/footer";
import { RiListCheck2, RiLayoutGridFill } from "react-icons/ri";
import { VscListFilter } from "react-icons/vsc";
import {
  BotaoMenu,
  BotaoRedondo,
  ContainerMenu,
  DivBotoes,
  TextoMenu,
} from "../Categoria/styles";
import { useState } from "react";

function Categorias() {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <>
      <Cabecalho />
      <main>
        <ContainerMenu>
          <TextoMenu>45 Resultados</TextoMenu>
          <DivBotoes>
            <BotaoMenu>Menu </BotaoMenu>
            <BotaoRedondo onClick={() => setIsGrid(!isGrid)}>
              {isGrid ? (
                <RiListCheck2 size={20} />
              ) : (
                <RiLayoutGridFill size={20} />
              )}
            </BotaoRedondo>
            <BotaoRedondo>
              <VscListFilter size={20} color={"#DD8560"} />
            </BotaoRedondo>
          </DivBotoes>
        </ContainerMenu>

        <Container isGrid={isGrid}>
          {categorias.map((produto, index) => (
            <ProdutoItem
              isGrid={isGrid}
              key={index}
              src={produto.src}
              preco={produto.preco}
              titulo={produto.titulo}
            />
          ))}
        </Container>
      </main>
      <Rodape />
    </>
  );
}

export default Categorias;
