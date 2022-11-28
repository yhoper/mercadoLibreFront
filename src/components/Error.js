import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Error = ({ img, title, action }) => {
  const history = useNavigate();
  const checkIfHasActionProp = () => !!action && action();

  const onClick = () => {
    checkIfHasActionProp();
    history("/");
  };
  return (
    <main className="">
      <div id="container">
        <div id="content">
          <img alt="Error-Img-Mercado-Libre" src={img} />
          <h4 className="error-title">{title}</h4>
          <p className="error-go-back" onClick={onClick}>
            Ir a la pagina principal
          </p>
        </div>
      </div>
    </main>
  );
};

Error.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.func,
};

Error.defaultProps = { func: () => {} };

export default Error;
