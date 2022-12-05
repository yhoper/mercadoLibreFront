import React, { Component } from "react";
import Error from "../components/Error";
import img from "../assets/upss.svg";

export const errorBoundary = (WrappedComponent) => {
  const resetError = (context) => context.seState({ error: false });

  return class extends Component {
    state = { error: false };
    static getDerivedFromError = () => ({ error: true });

    render() {
      const { props, state } = this;
      const { error } = state;
      const title = "Parece que esta página no existe";
      const action = () => resetError(this);
      const ErrorRender = <Error img={img} title={title} action={action} />;
      const Normalrender = <WrappedComponent {...props} />;
      return error ? ErrorRender : Normalrender;
    }
  };
};
