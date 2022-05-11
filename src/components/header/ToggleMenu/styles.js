import styled from "styled-components";

const ToggleMenu = styled.aside`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-100%")};
  z-index: 99;
  transition: 0.5s ease-in-out;
`;

const BotaoFechar = styled.button`
  position: absolute;
  left: 16px;
  top: 10px;

  border: none;
  outline: none;
  background-color: transparent;
`;

const ListaMenu = styled.ul`
  position: absolute;
  top: 10%;
  left: 5%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25%;
`;

const ItemMenu = styled.li`
  font-size: 16px;
  font-weight: 400;
  font-family: "Tenor Sans", sans-serif;
  color: #333333;
`;

const Social = styled.div`
  position: absolute;
  display: flex;
  top: 90%;
  left: 30%;
  width: 160px;
  height: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Tel = styled.p`
  position: absolute;
  top: 80%;
  left: 5%;
  font-size: 16px;
  line-height: 34px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #333333;
`;

const Location = styled(Tel)`
  top: 85%;
`;

export { ToggleMenu, BotaoFechar, ListaMenu, ItemMenu, Social, Tel, Location };
