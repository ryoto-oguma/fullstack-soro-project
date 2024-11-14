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
  width: min(95vw, 95vh * 0.75);
  height: min(95vh, 95vw / 0.75);
  overflow: hidden;
`;

export default Calendar;
