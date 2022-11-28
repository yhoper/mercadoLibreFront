import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
const Breadcrumb = () => {
  return (
    <div>
      Breadcrumb
      <nav>
        <ol class="andes-breadcrumb">
          <li class="andes-breadcrumb__item">
            <a
              class="andes-breadcrumb__link"
              href="https://servicios.mercadolibre.cl/"
              title="Servicios"
            >
              Servicios
            </a>
            <div class="andes-breadcrumb__chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
              </svg>
            </div>
          </li>
          <li class="andes-breadcrumb__item">
            <a
              class="andes-breadcrumb__link"
              href="https://servicios.mercadolibre.cl/hogar/"
              title="Hogar"
            >
              Hogar
            </a>
            <div class="andes-breadcrumb__chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
              </svg>
            </div>
          </li>
          <li class="andes-breadcrumb__item">
            <a
              class="andes-breadcrumb__link"
              href="https://servicios.mercadolibre.cl/hogar/construccion/"
              title="Construcción"
            >
              Construcción
            </a>
            <div class="andes-breadcrumb__chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
              </svg>
            </div>
          </li>
          <li class="andes-breadcrumb__item">
            <a
              class="andes-breadcrumb__link"
              href="https://servicios.mercadolibre.cl/hogar/construccion/especialistas/"
              title="Especialistas"
            >
              Especialistas
            </a>
            <div class="andes-breadcrumb__chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
              </svg>
            </div>
          </li>
          <li class="andes-breadcrumb__item">
            <a
              class="andes-breadcrumb__link"
              href="https://servicios.mercadolibre.cl/hogar/construccion/especialistas/casas-prefabricadas/"
              title="Casas Prefabricadas"
              aria-current="page"
            >
              Casas Prefabricadas
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
