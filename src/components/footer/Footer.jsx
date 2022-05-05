import styled from "styled-components";
import { RiTwitterFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import { Divisor } from "../divisor/Divisor";

const Principal = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
const Social = styled(Container)`
  width: 162px;
  flex-direction: row;
`;

const Copy = styled.p`
  font-size: 12px;
  line-height: 50px;
  text-align: center;
  height: 50px;
`;

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
