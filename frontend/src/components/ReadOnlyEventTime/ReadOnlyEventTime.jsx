import * as React from "react";
import styled from "styled-components";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function EventTime() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Start"
          value={dayjs("2024-11-15 17:30")}
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
