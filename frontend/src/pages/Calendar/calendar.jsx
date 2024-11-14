import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style/Calendar.css";
import Header from "../../components/Header/Header";
import styled from "styled-components";

function Calendar() {
  return (
    <>
      <Frame>
        <Header />
      </Frame>
    </>
  );
}

const Frame = styled.div`
  border: 2px solid #000000;
  width: min(98vw, 98vh * 0.75);
  height: min(98vh, 98vw / 0.75);
  overflow: hidden;
  background: ${(props) => props.theme.palette.background.main};
`;

export default Calendar;
