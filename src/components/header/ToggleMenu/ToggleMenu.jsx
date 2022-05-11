import {
  BotaoFechar,
  ToggleMenu,
  ListaMenu,
  ItemMenu,
  Social,
  Tel,
  Location,
} from "./styles";

import {
  RiCloseCircleLine,
  RiTwitterFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiPhoneLine,
} from "react-icons/ri";

import { GoLocation } from "react-icons/go";

function Toggle({ isOpen, setIsOpen }) {
  return (
    <ToggleMenu isOpen={isOpen}>
      <BotaoFechar
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <RiCloseCircleLine size={30} />
      </BotaoFechar>
      <ListaMenu>
        <ItemMenu>New</ItemMenu>
        <ItemMenu>Apparel</ItemMenu>
        <ItemMenu>Bag</ItemMenu>
        <ItemMenu>Shoes</ItemMenu>
        <ItemMenu>Beauty</ItemMenu>
        <ItemMenu>Acessories</ItemMenu>
      </ListaMenu>

      <Tel>
        <RiPhoneLine /> (21) 99999-9999
      </Tel>
      <Location>
        <GoLocation /> Errejota
      </Location>

      <Social>
        <RiTwitterFill size={25} />
        <RiInstagramFill size={25} />
        <RiYoutubeFill size={25} />
      </Social>
    </ToggleMenu>
  );
}

export default Toggle;
