import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { errorBoundary } from "./helpers/errorBoundary";
import "./scss/App.scss";

const Header = lazy(() => import("./components/header/Header"));
const Home = lazy(() => import("./pages/home/Home"));
const Plp = lazy(() => import("./pages/plp/Plp"));
const Pdp = lazy(() => import("./pages/pdp/Pdp"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  useEffect(() => {
    //Mostrar mensaje de bienvenida
  });
  return (
    <>
      <Suspense fallback={<div>Cargando</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Plp />} />
          <Route path="/items/:id" element={<Pdp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default errorBoundary(App);
