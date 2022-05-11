import { Header, Logo, BotaoMenu, BotaoSecundario } from "./styles";
import Toggle from "./ToggleMenu";
import { RiMenu2Fill, RiSearch2Line, RiShoppingBag2Line } from "react-icons/ri";
import logo from "../../img/Logo2.png";
import { useState } from "react";

function Cabecalho() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header>
        <BotaoMenu onClick={() => setIsOpen(!isOpen)}>
          <RiMenu2Fill size={25} />
        </BotaoMenu>
        <a href="/">
          <Logo src={logo} alt="" />
        </a>
        <div>
          <BotaoSecundario>
            <RiSearch2Line size={25} />
          </BotaoSecundario>
          <BotaoSecundario>
            <RiShoppingBag2Line size={25} />
          </BotaoSecundario>
        </div>
      </Header>

      <Toggle isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Cabecalho;
