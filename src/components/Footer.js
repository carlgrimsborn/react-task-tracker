import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const nameOfUser = "Carl";
  const url = `/profile/${nameOfUser}`;
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
      <br />
      <Link to={url}>Profile</Link>
    </footer>
  );
};

export default Footer;
