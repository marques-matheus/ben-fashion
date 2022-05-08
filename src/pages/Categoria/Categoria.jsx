import Cabecalho from "../../components/header";
import { useParams } from "react-router-dom";

function Categoria() {
  const params = useParams();
  return (
    <>
      <Cabecalho />
      <h1>{params.categoria}</h1>
    </>
  );
}

export default Categoria;
