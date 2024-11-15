import { React, useState } from "react";
import styled from "styled-components";

import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function RequestButton() {
  const [requestFlag, setRequestFlag] = useState(false);

  const handleClick = () => {
    if (requestFlag === false) {
      setRequestFlag(true);
    } else {
      setRequestFlag(false);
    }
  };

  return (
    <>
      <IconButton onClick={() => handleClick()}>
        {requestFlag ? (
          <FavoriteIcon fontSize="large" color={"secondary"} />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
      </IconButton>
    </>
  );
}

export default RequestButton;
