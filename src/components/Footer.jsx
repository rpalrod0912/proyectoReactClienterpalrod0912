import React from "react";
import { Link, NavLink } from "react-router-dom";
import footIcon from "../images/iconoPokeball.jpg";
import insta from "../images/ig.png";
import twitter from "../images/tw.png";
import youtube from "../images/ytpr.png";

const Footer = () => {
  return (
    <footer>
      <img src={footIcon} />
      <div class="social">
        <img src={insta} />
        <img src={twitter} />
        <img src={youtube} />
      </div>
    </footer>
  );
};

export default Footer;
