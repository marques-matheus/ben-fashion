import styled from "styled-components";

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

export { Principal, Container, Social, Copy };
