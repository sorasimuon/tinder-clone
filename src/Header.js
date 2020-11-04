import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>

      <Link to="/">
        <img
          className="header-logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-500x281.png"
          alt="tinder-logo"
        />
      </Link>

      <IconButton>
        <ForumIcon fontSize="large" className="header-icon" />
      </IconButton>
    </div>
  );
}

export default Header;
