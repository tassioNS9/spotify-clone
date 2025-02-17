import React from "react";
import spotifyLogo from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img width="32" src={spotifyLogo} alt="Logo Spotify" />
      </Link>
      <Link to="/">
        <h1>
          Spotify da Nay{" "}
          <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} />
        </h1>
      </Link>
    </div>
  );
};

export default Header;
