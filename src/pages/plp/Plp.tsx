import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { searchListProducts } from "../../api/mercadolibre";
import { amountFormat } from "../../utils/functions";
import { Item } from "../../interfaces/products";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useQuery } from "react-query";

const Plp = () => {
  let location = useLocation();
  let txtUrl = location?.search;
  let currentLink = txtUrl?.split("?search=")[1];
  let txtToSearch = txtUrl?.split("?search=")[1].replace(/-/g, " ");

  const [categories, setCategories] = useState<[]>();
  const [page, setPage] = useState(0);
  const changePage = (changed: string) => {
    if (changed === "next") {
      let newPage = page + 1;
      setPage(newPage);
    } else if (changed === "back") {
      let newPage = page - 1;
      setPage(newPage);
    }
    return;
  };

  const getProductList = async ({ queryKey }: any) => {
    const items: Item[] = [];
    const res = await searchListProducts(txtToSearch, queryKey[1]).then(
      (response: any) => {
        response.items.map((res: any) => {
          items.push(res);
        });
        setCategories(response.categories);
        return items;
      }
    );
    return res;
  };

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
  const { isLoading, error, data } = useQuery(
    ["products", page],
    getProductList
  );
  return (
    <main>
      <Breadcrumb categories={categories} currentLink={currentLink} />
      {isLoading === true ? (
        <>
          <div className="loader"></div>
          <div className="containerPagination">
            <div className="loading">Espere, Cargando más productos...</div>
          </div>
        </>
      ) : (
        data?.map((product: Item) => (
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
        ))
      )}

      <div className="containerPagination">
        <button onClick={() => changePage("back")}>{`< Anterior`} </button>
        <button onClick={() => changePage("next")}>{`Siguiente >`} </button>
      </div>
    </main>
  );
};

export default Plp;
