import React from "react";
import styled from "styled-components";

function Header() {
  return <Title>headerです</Title>;
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  //   color: palevioletred;
  color: ${(props) => props.theme.palette.primary.main};
`;

export default Header;
