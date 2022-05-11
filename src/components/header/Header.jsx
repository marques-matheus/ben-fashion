import { Header, Logo, BotaoMenu, BotaoSecundario, ToggleMenu } from "./styles";
import { RiMenu2Fill, RiSearch2Line, RiShoppingBag2Line } from "react-icons/ri";
import logo from "../../img/Logo2.png";
import { useState } from "react";

function Cabecalho() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);
  if (isActive) {
    return <ToggleMenu>
      <BotaoMenu onClick={handleClick} color={'black'}/>
      <ul>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
        <li>teste</li>
      </ul>
    </ToggleMenu>
    ;
  }

  return (
    <Header>
      <BotaoMenu onClick={handleClick}>
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
  );
}

export default Cabecalho;
