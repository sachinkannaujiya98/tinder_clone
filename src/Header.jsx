import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon
          color={"error"}
          fontSize={"large"}
          className="header_icon"
        />
      </IconButton>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijdFJ7aDXFgA34u0i87bUHmW9HeIGe31E_6FsZrA_evh8V9O77Qt_tNAuh11ROgglqxM&usqp=CAU" />
      <IconButton>
        <ForumIcon color={"info"} fontSize={"large"} className="header_icon" />
      </IconButton>
    </div>
  );
};

export default Header;
