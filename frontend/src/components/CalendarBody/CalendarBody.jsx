import * as React from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";

function CalendarBody() {
  const eventList = [
    {
      eventId: "1",
      title: "池袋でlunch",
      // date: "2024-11-14",
      place: "池袋",
      start: "2024-11-14",
      end: "2024-11-16",
      startTime: "09",
      endTime: "14",
      detail: "池袋でお昼にジンギスカンを食べませんか?",
      requests: [],
      eventOwner: "oguma",
    },
    {
      eventId: "2",
      title: "新宿でlunch",
      date: "2024-11-15",
      place: "新宿",
      startTime: "11",
      endTime: "17",
      detail: "新宿でお昼にサムギョプサルを食べませんか?",
      requests: [],
      eventOwner: "oguma",
    },
  ];

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
          events={eventList}
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
  --fc-small-font-size: 7px;
  --fc-event-bg-color: ${(props) => props.theme.palette.primary.main};
  --fc-event-border-color: ${(props) => props.theme.palette.primary.main};

  a {
    color: ${(props) => props.theme.palette.primary.main};
  }

  .fc-toolbar-title {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export default CalendarBody;
