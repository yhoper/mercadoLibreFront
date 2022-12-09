import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ categories, currentLink }) => {
  console.log(categories,currentLink );
  return (
    <nav class="container breadcrumb clear">
      <ul>
        {categories?.length > 1 &&
          categories.map((item, i) => (
            <li>
              <Link key={i} to='#'>{item}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
