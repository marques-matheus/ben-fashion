import styled from "styled-components";

export const Container = styled.section`
  display: ${(props) => (props.isGrid ? "grid" : "flex")};
  grid-template-columns: 1fr 1fr;
  padding: 6%;
  grid-gap: 20px;
  flex-direction: column;

  width: min-content;
`;
