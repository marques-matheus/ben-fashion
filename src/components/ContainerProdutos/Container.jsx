import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.isGrid ? "Grid" : "Flex")};
  grid-template-columns: 1fr 1fr;
  margin: 8%;
  grid-gap: 20px;
  flex-direction: column;

  width: min-content;
`;
