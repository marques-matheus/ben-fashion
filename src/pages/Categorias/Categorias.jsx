import Container from "../../components/ContainerProdutos";
import Cabecalho from "../../components/header";
import categorias from "../../services/categorias.json";
import ProdutoItem from "../../components/ProdutoItem/ProdutoItem";
import Rodape from "../../components/footer";
import {TiArrowSortedDown} from 'react-icons/ti';
import {RiListCheck2} from 'react-icons/ri';
import {VscListFilter} from 'react-icons/vsc';
import { BotaoMenu, BotaoRedondo, ContainerMenu, DivBotoes, TextoMenu } from "../Categoria/styles";

function Categorias() {
  return (
    <>
      <Cabecalho />
      <main>
        <ContainerMenu>
            <TextoMenu>45 Resultados</TextoMenu>
            <DivBotoes>
              <BotaoMenu>Menu <TiArrowSortedDown/></BotaoMenu>
              <BotaoRedondo><RiListCheck2 size={20}/></BotaoRedondo>
              <BotaoRedondo><VscListFilter size={20} color={'#DD8560'}/></BotaoRedondo>
            </DivBotoes>

        </ContainerMenu>

        <Container>
          {categorias.map((produto, index) => (
            <ProdutoItem
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
