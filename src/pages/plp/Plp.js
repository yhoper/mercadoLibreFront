import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
const Plp = () => {
  let location = useLocation();
  let txtUrl = location.search;
  let txtToSearch = txtUrl.split("?search=")[1].replace(/-/g, " ");
  const [products, setProducts] = useState([]);
  const [discount, setDiscount] = useState(false);
  const path = "https://api.mercadolibre.com/sites/MLA/";
  useEffect(() => {
    const searchProducts = async (txtToSearchs) => {
      let resApi = await fetch(
        `${path}search?q=${txtToSearch}&limit=4`
      );
      let products = await resApi.json();
      setProducts(products.results);
    };
    searchProducts(txtToSearch);
  }, []);

  const checkData = (data) => {
    let amount = data[data.length - 1].amount;
    let amountFormat = new Intl.NumberFormat("es-CL").format(amount);
    return (
      <span className="content-amount">
        <span className="amount">$ {amountFormat}</span>
        {data[data.length - 1].regular_amount != null && (
          <span className="card-plp-discount"> </span>
        )}
      </span>
    );
  };

  return (
    <main>
      {products.map((product) => (
        <div className="container" key={product.id}>
          <div className="flex-grid-plp">
            <div className="col-plp-bg border-botton card-plp">
              <div className="col-plp wh-20">
                <Link to={`/items/${product.id}`}>
                  <img className="plp-img plp-height" src={product.thumbnail} />
                </Link>
              </div>
              <div className="col-plp wh-80">
                <p className="pt-0, mt-0 mount">
                  <Link to={`/items/${product.id}`}>
                    {checkData(product.prices.prices)}
                  </Link>
                </p>
                <div className="container-card-plp height-80">
                  <div className="col-card-plp">
                    <p className="p-txt-description-card-plp txt-20">
                      <Link to={`/items/${product.id}`}>{product.title}</Link>
                    </p>
                  </div>
                  <div className="col-card-plp">
                    <p className="p-txt-card-plp center txt-20">
                      <Link to={`/items/${product.id}`}>No sé que dice</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Plp;
