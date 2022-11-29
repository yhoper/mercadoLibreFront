import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo__large_plus@2x.png";

export const Logo = () => {
  return (
    <div className="card wh-10">
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
    </div>
  );
};
