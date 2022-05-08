import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #e7eaef;
  height: 60px;
  align-items: center;
  position: static;
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


export {
    Header, Logo, 
}