import * as React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";

function CalendarBody({ eventList } = props) {
  const navigate = useNavigate();

  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  const handleEventClick = (arg) => {
    const eventPath = "/event/" + arg.event.extendedProps.eventId;
    navigate(eventPath);
  };

  return (
    <>
      <Frame>
        <FullCalendar
          aspectRatio={1}
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          events={eventList}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          headerToolbar={{
            start: "title",
            center: "",
            end: "prev,next",
          }}
        />
      </Frame>
    </>
  );
}

const Frame = styled.div`
  margin: 0 auto;
  width: 95%;
  --fc-neutral-text-color: ${(props) => props.theme.palette.primary.main};
  --fc-border-color: ${(props) => props.theme.palette.primary.main};
  --fc-small-font-size: 7px;
  --fc-event-bg-color: ${(props) => props.theme.palette.primary.main};
  --fc-event-border-color: ${(props) => props.theme.palette.primary.main};

  a {
    color: ${(props) => props.theme.palette.primary.main};
  }

  .fc-toolbar-title {
    color: ${(props) => props.theme.palette.primary.main};
  }

  .fc .fc-button-primary {
    background-color: ${(props) => props.theme.palette.primary.main};
    border-color: ${(props) => props.theme.palette.primary.main};
  }

  .fc-h-event {
    cursor: pointer;
  }
`;

export default CalendarBody;
