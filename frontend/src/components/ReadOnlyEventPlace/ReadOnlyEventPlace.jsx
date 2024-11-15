import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

function ReadOnlyEventPlace({ eventPlace } = props) {
  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <Label>Place</Label>
        <TextField
          fullWidth
          value={eventPlace}
          slotProps={{ readonly: true, textField: { size: "small" } }}
        />
      </Box>
    </>
  );
}

const Label = styled(InputLabel)`
  text-align: left;
  color: ${(props) => props.theme.palette.primary.main};
`;

export default ReadOnlyEventPlace;
