import Container from "../../components/ContainerProdutos";
import Cabecalho from "../../components/header";
import categorias from "../../services/categorias.json";
import ProdutoItem from "../../components/ProdutoItem/ProdutoItem";
import Rodape from "../../components/footer";

function Categorias() {
  return (
    <>
      <Cabecalho />
      <main>
        <div
          style={{
            height: "90px",
            backgroundColor: "#000",
          }}
        ></div>

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
