import * as React from "react";
import styled from "styled-components";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function EventTime({ type, eventTime } = pros) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label={type}
          value={dayjs(eventTime)}
          format="YYYY/MM/DD HH:mm"
          ampm={false}
          slotProps={{ textField: { size: "small" } }}
          readOnly
        />
      </LocalizationProvider>
    </>
  );
}

export default EventTime;
