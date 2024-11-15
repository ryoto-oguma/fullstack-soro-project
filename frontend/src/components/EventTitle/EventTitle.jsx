import * as React from "react";
import styled from "styled-components";

function EventTitle({ eventTitle } = props) {
  console.log(eventTitle);
  return (
    <>
      <Title>{eventTitle}</Title>
    </>
  );
}

const Title = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: 20px;
`;

export default EventTitle;
