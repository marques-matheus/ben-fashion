import styled from "styled-components";

const Img = styled.img`
  margin-bottom: 5%;
  width: 100%;
  height: auto;
`;

const Botao = styled.button`
  position: absolute;
  background-color: ${(props) => props.theme.botaoDestaqueHome};
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

const Link = styled.a`
  width: 130px;
  display: flex;
  align-items: center;
  margin: 10% auto;
  justify-content: space-between;
  padding: 12px;
  text-decoration: none;
  color: black;
`;

const Luxury = styled.h2`
  position: absolute;
  left: 43px;
  top: 230px;
  font-style: italic;
  font-weight: 700;
  text-transform: uppercase;
  color: #333333;
  font-size: 3rem;
  opacity: 0.6;
  font-family: "Bodoni Moda", serif;
`;

const Fashion = styled(Luxury)`
  left: 60.37px;
  top: 269.64px;
`;
const Acessories = styled(Luxury)`
  left: 65.24px;
  top: 309.02px;
`;

const And = styled(Luxury)`
  left: 36.71px;
  top: 317.24px;
  font-size: 2rem;
`;

export { Img, Botao, Link, Fashion, Luxury, And, Acessories };
