import styled from "styled-components";

export const Header = styled.header`
width: 100%;
display: grid;
grid-template-columns:  1fr 1fr 1fr;
background-color: #E7eaef;
`;

function Cabecalho() {
  return (
    <Header>
      <div> menu </div>
      <div> logo </div>
      <div> botoes </div>
    </Header>
  );
}

export default Cabecalho;
