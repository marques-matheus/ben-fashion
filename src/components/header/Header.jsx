import styled from "styled-components";
import { RiMenu2Fill, RiSearch2Line, RiShoppingBag2Line } from "react-icons/ri";
import logo from "../../img/Logo2.png";

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #e7eaef;
  height: 60px;
  align-items: center;
  position: absolute;
  svg {
    cursor: pointer;
  }

  svg:first-child {
    padding-right: 10px;
  }
`;

const Logo = styled.img`
  width: 70px;
  height: auto;
  opacity: 0.7;
`;

function Cabecalho() {
  return (
    <Header>
      <RiMenu2Fill size={25} />
      <Logo src={logo} alt="" />
      <div>
        <RiSearch2Line size={25} />
        <RiShoppingBag2Line size={25} />
      </div>
    </Header>
  );
}

export default Cabecalho;
