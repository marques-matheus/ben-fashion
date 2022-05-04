function ProdutoItem({ titulo, src, preco }) {
  return (
    <>
      
        <img src={src} alt={titulo} />
        <h2>{titulo}</h2>
        <p>{preco}</p>
     
    </>
  );
}

export default ProdutoItem;
