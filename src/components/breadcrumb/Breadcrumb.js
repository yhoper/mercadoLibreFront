import React, { Fragment } from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";

const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div className="container">
      {breadcrumbs.map(({ match, breadcrumb }, i) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {i > 0 && breadcrumb}
        </NavLink>
      ))}
    </div>
  );
};

export default Breadcrumb;
