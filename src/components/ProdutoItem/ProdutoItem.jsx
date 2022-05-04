import styled from "styled-components";

function ProdutoItem({ titulo, src, preco }) {
  const Container = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center; 
    color: black;
    text-decoration: none;
  `;

  const Img = styled.img`
    width: 165px;
    height: 200px;
  `;

  const TituloProduto = styled.h2`
    line-height: 16px;
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    margin: 10px 0 5px 0;
  `;

  const PrecoProduto = styled.h2`
    color: #dd8560;
    line-height: 24px;
    font-size: 15px;
    font-weight: lighter;
  `;

  return (
    <Container href="">
      <Img src={src} alt={titulo} />
      <TituloProduto>{titulo}</TituloProduto>
      <PrecoProduto>{preco}</PrecoProduto>
    </Container>
  );
}

export default ProdutoItem;
