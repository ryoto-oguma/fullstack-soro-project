import * as React from "react";
import styled from "styled-components";

function EventTitle() {
  return (
    <>
      <Title>池袋で昼ごはん</Title>
    </>
  );
}

const Title = styled.div`
  color: ${(props) => props.theme.palette.primary.main};
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default EventTitle;
