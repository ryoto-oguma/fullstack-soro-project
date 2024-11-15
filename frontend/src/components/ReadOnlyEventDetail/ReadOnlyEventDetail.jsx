import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

function ReadOnlyEventDetail({ eventDetail } = props) {
  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <Label>Detail</Label>
        <TextField
          fullWidth
          value={eventDetail}
          slotProps={{ readonly: true, textField: { size: "small" } }}
          multiline
        />
      </Box>
    </>
  );
}

const Label = styled(InputLabel)`
  text-align: left;
  color: ${(props) => props.theme.palette.primary.main};
`;

export default ReadOnlyEventDetail;
