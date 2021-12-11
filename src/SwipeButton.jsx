import React from "react";
import "./SwipeButton.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
const SwipeButton = () => {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon className="swipeButton_repeat" fontSize={"large"} />
      </IconButton>

      <IconButton>
        <CloseIcon className="swipeButton_left" fontSize={"large"} />
      </IconButton>
      <IconButton>
        <StarRateIcon className="swipeButton_star" fontSize={"large"} />
      </IconButton>
      <IconButton>
        <FavoriteIcon className="swipeButton_fav" fontSize={"large"} />
      </IconButton>
      <IconButton>
        <FlashOnIcon className="swipeButton_flash" fontSize={"large"} />
      </IconButton>
    </div>
  );
};

export default SwipeButton;
