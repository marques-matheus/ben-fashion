import { Principal, Social, Container, Copy } from "./styles";
import { RiTwitterFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import { Divisor } from "../divisor/Divisor";

function Rodape() {
  return (
    <>
      <Principal>
        <Social>
          <RiTwitterFill size={25} />
          <RiInstagramFill size={25} />
          <RiYoutubeFill size={25} />
        </Social>
        <Divisor />
        <Container>
          <p>email@email.com</p>
          <p>+55 21 999999999</p>
          <p>08:00 - 22:00 - Todos os dias</p>
        </Container>
        <Divisor />
        <Social style={{ width: "200px" }}>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <a href="">Blog</a>
        </Social>
      </Principal>
      <Copy>Copyright© Bendev Junior All Rights Reserved.</Copy>
    </>
  );
}

export default Rodape;
