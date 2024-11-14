import * as React from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";

function CalendarBody() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  return (
    <>
      <Frame>
        <FullCalendar
          aspectRatio={1}
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "池袋でお昼ご飯!!", date: "2024-11-14" },
            { title: "新宿で夜ご飯", date: "2024-11-14" },
          ]}
          dateClick={handleDateClick}
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

  a {
    color: ${(props) => props.theme.palette.primary.main};
  }

  .fc-toolbar-title {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export default CalendarBody;
