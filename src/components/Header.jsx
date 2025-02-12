import React from "react";
import spotifyLogo from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <a to="/">
        <img width="32" src={spotifyLogo} alt="Logo Spotify" />
      </a>
      <a to="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;
