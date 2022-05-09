import styled from "styled-components";

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
    padding 16px;
  background-color: #fff;
`;

const TextoMenu = styled.h3`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase; ;
`;

const DivBotoes = styled.div`
  width: 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
`;

const BotaoMenu = styled.button`
  width: 72.75px;
  height: 36px;
  background-color: rgba(200, 200, 200, 0.2);
  border: none;
  font-size: 14px;
  border-radius: 33px;
  color: #555555;
  cursor: pointer;

  &:hover {
    background: rgba(200, 200, 200, 0.5);
  }
  
  
  
`;

const BotaoRedondo = styled(BotaoMenu)`
  width: 36px;
  height: 36px;
`;

export { ContainerMenu, TextoMenu, DivBotoes, BotaoMenu, BotaoRedondo };
