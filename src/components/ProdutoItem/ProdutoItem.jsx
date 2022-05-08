import {Container, Img, PrecoProduto, TituloProduto} from './styles';

function ProdutoItem({ titulo, src, preco }) {
  return (
    <Container href={`/categoria/${titulo}`}>
      <Img src={src} alt={titulo} />
      <TituloProduto>{titulo}</TituloProduto>
      <PrecoProduto>{preco}</PrecoProduto>
    </Container>
  );
}

export default ProdutoItem;
