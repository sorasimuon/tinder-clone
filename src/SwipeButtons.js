import React from "react";
import "./SwipeButtons.css";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { amber, red, green, blue, deepPurple } from "@material-ui/core/colors";

function SwipeButtons() {
  return (
    <div className="swipebuttons-container">
      <IconButton>
        <ReplayIcon
          fontSize="large"
          className="swipebuttons-button"
          style={{ color: amber[300] }}
        ></ReplayIcon>
      </IconButton>
      <IconButton>
        <CloseIcon
          className="swipebuttons-button"
          style={{ color: red["A400"] }}
        ></CloseIcon>
      </IconButton>
      <IconButton>
        <StarIcon
          fontSize="large"
          className="swipebuttons-button"
          style={{ color: blue["300"] }}
        ></StarIcon>
      </IconButton>
      <IconButton>
        <FavoriteIcon
          fontSize="large"
          className="swipebuttons-button"
          style={{ color: green[500] }}
        ></FavoriteIcon>
      </IconButton>
      <IconButton>
        <FlashOnIcon
          fontSize="large"
          className="swipebuttons-button"
          style={{ color: deepPurple[500] }}
        ></FlashOnIcon>
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
