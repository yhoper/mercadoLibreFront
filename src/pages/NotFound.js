import React from "react";
import Error from "../components/Error";
import img from "../assets/upss.svg";

const NotFound = () => {
  const title = "Parece que esta página no existe";
  return <Error img={img} title={title} />;
};

export default NotFound;
