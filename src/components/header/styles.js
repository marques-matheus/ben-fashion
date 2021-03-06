import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #e7eaef;
  height: 60px;
  align-items: center;
  position: static;
`;

const BotaoMenu = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const BotaoSecundario = styled(BotaoMenu)`
  margin: 5px;
`;

const Logo = styled.img`
  width: 70px;
  height: auto;
  opacity: 0.7;
`;



export { Header, Logo, BotaoMenu, BotaoSecundario};
