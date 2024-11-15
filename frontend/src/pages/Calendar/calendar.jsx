import "./style/Calendar.css";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import CalendarBody from "../../components/CalendarBody/CalendarBody";

function Calendar({ eventList } = props) {
  return (
    <>
      <Frame>
        <Header />
        <CalendarBody eventList={eventList} />
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
