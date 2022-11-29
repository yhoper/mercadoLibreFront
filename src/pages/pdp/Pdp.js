import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";

const Pdp = () => {
  let location = useLocation();
  let idParam = location.pathname.split("/items/")[1].replace(/-/g, " ");
  const [item, setItem] = useState([]);
  const [itemDescription, setItemDescription] = useState([]);
  const path = "https://api.mercadolibre.com/items/";

  useEffect(() => {
    const searchProduct = async (idParam) => {
      let resApi = await fetch(`${path}${idParam}`);
      let product = await resApi.json();
      setItem(product);
    };
    searchProduct(idParam);

    const searchProductDescription = async (idParam) => {
      let resApi = await fetch(`${path}${idParam}/description`);
      let productDescription = await resApi.json();

      let txt = productDescription.plain_text;

      const newText = txt.split("\n");
      setItemDescription(newText);
    };
    searchProductDescription(idParam);
  }, []);

  return (
    <main>
      <div className="container">
        <div className="flex-grid-plp">
          <div className="col-plp-bg">
            <div className="col-plp wh-70">
              <Link>
                <img className="wh-100" src={item.thumbnail} />
              </Link>
            </div>
            <div className="col-plp wh-30 pd-l-r-1rem">
              <p className="pt-0, mt-0 mount">{item.title}</p>
              <p className="pt-0, mt-0 mount">{item.price}</p>
              <button className="btn-buy">Comprar ahora</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex-grid-plp">
          <div className="col-plp-bg pd-l-r-1rem ">
            <div>Descipción del producto</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex-grid-plp">
          <div className="col-plp-bg pd-l-r-1rem ">
            {itemDescription.map((item) => (
              <>
                {item}
                <br />
              </>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pdp;
