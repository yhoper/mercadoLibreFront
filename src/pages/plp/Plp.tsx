import { useState, useEffect, Fragment } from "react";
import { useLocation, Link } from "react-router-dom";
import { searchListProducts } from "../../api/mercadolibre";
import { amountFormat } from "../../utils/functions";
import { Item } from "../../interfaces/products";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const Plp = () => {
  const breadcrumbs = useBreadcrumbs();
  let location = useLocation();
  let txtUrl = location.search;
  let txtToSearch = txtUrl.split("?search=")[1].replace(/-/g, " ");

  const [products, setProducts] = useState<Item[]>();

  useEffect(() => {
    if (txtToSearch) {
      const data: Item[] = [];
      searchListProducts(txtToSearch).then((response: any) => {
        response.map((res: any) => data.push(res.items[0]));
        setProducts(data);
      });
    }
  }, []);

  const checkData = (data: number) => {
    let amount = data;
    let price = amountFormat(amount);

    return (
      <span className="content-amount">
        <span className="amount">${price}</span>
        {data != null && <span className="card-plp-discount"> </span>}
      </span>
    );
  };

  return (
    <main>
      <Breadcrumb />

      {products?.map((product: Item) => (
        <div className="container" key={product.id}>
          <div className="flex-grid-plp">
            <div className="col-plp-bg border-botton card-plp">
              <div className="col-plp wh-20">
                <Link to={`/items/${product.id}`}>
                  <img
                    className="plp-img plp-height"
                    src={product.picture}
                    alt={product.title}
                  />
                </Link>
              </div>
              <div className="col-plp wh-80">
                <p className="pt-0, mt-0 mount">
                  <Link to={`/items/${product.id}`}>
                    {checkData(product.price.amount)}
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
