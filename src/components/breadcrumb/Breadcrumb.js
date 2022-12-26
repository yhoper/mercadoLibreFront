import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ categories, currentLink }) => {
  return (
    <nav className="container breadcrumb clear">
      <ul>
        {categories?.length > 1 &&
          categories.map((item, i) => (
            <li key={i}>
              <Link to="#">{item}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
