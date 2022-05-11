import { Container, Img, PrecoProduto, TituloProduto } from "./styles";

function ProdutoItem({ titulo, src, preco, isGrid }) {
  return (
    <Container href={`/categoria/${titulo}`}>
      <Img isGrid={isGrid} src={src} alt={titulo} />
      <div>
        <TituloProduto>{titulo}</TituloProduto>
        <PrecoProduto>{preco}</PrecoProduto>
      </div>
    </Container>
  );
}

export default ProdutoItem;
