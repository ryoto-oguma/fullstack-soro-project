import styled from "styled-components";
import Header from "../../components/Header/Header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EventTitle from "../../components/EventTitle/EventTitle";
import ReadOnlyEventTime from "../../components/ReadOnlyEventTime/ReadOnlyEventTime";
import ReadOnlyEventPlace from "../../components/ReadOnlyEventPlace/ReadOnlyEventPlace";
import ReadOnlyEventDetail from "../../components/ReadOnlyEventDetail/ReadOnlyEventDetail";
import RequestButton from "../../components/RequestButton/RequestButton";

function EventDetail() {
  return (
    <>
      <Frame>
        <Header />
        <EventDetails>
          <EventTitle />
          <TimeInfo>
            <StartTime>
              <ReadOnlyEventTime />
            </StartTime>
            <ArrowIcon />
            <EndTime>
              <ReadOnlyEventTime />
            </EndTime>
          </TimeInfo>
          <Place>
            <ReadOnlyEventPlace />
          </Place>
          <Detail>
            <ReadOnlyEventDetail />
          </Detail>
          <Request>
            <RequestButton />
          </Request>
        </EventDetails>
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
  color: red;
`;

const EventDetails = styled.div`
  margin: 0 auto;
  width: 98%;
`;

const TimeInfo = styled.div`
  margine-top: 10px;
`;

const StartTime = styled.div`
  width: 45%;
  float: left;
`;

const EndTime = styled.div`
  width: 45%;
  float: right;
`;

const ArrowIcon = styled(ArrowForwardIosIcon)`
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.palette.primary.main};
`;

const Place = styled.div`
  margin-top: 30px;
`;

const Detail = styled.div`
  margin-top: 10px;
`;

const Request = styled.div`
  margin-top: 10px;
`;

export default EventDetail;
