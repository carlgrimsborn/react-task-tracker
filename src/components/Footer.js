import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
      <br />
      <Link to="/profile/carl">Profile</Link>
    </footer>
  );
};

export default Footer;
