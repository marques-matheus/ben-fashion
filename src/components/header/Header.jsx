import { Header, Logo } from "./styles";
import { RiMenu2Fill, RiSearch2Line, RiShoppingBag2Line } from "react-icons/ri";
import logo from "../../img/Logo2.png";



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
