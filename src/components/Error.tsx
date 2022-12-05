import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ErrorPros {
  img:string,
  title:string,
  action?: Function,
}

const Error:FC<ErrorPros> = (props) => {

  const { img, title, action } = props

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

export default Error;
