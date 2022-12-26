import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductDetails,
  searchProductDescription,
} from "../../api/mercadolibre";
import { ProductDescriptionProps } from "../../interfaces/productDescription";
import { ProductDetails } from "../../interfaces/productDetails";
import { amountFormat } from "../../utils/functions";
import { useQuery } from "react-query";

const Pdp = () => {
  let { id } = useParams();

  const [item, setItem] = useState<ProductDetails>();
  const [itemDescription, setItemDescription] = useState("");

  const getProductDetail = async () => {
    console.log("estoy en la función con el id:", id);
    if (id) {
      const res = await getProductDetails(id).then(
        (response: ProductDetails) => {
          setItem(response);
          return response;
        }
      );

      const resDescription = await searchProductDescription(id).then(
        (response: ProductDescriptionProps) => {
          const value = response.plain_text.replace("\n", " ");
          setItemDescription(value);
          res.description = value;
          return value;
        }
      );
      return res;
    }
  };
  // useEffect(() => {
  //   if (id) {
  //     getProductDetails(id).then((response: ProductDetails) => {
  //       setItem(response);
  //     });

  //     searchProductDescription(id).then((response: ProductDescriptionProps) => {
  //       const value = response.plain_text.replace("\n", " ");
  //       setItemDescription(value);
  //     });
  //   }
  // }, [id]);

  const { isLoading, error, data } = useQuery("product", getProductDetail);

  return (
    <main>
      {isLoading === true ? (
        <>
          <div className="loader"></div>
          <div className="containerPagination">
            <div className="loading"> Cargando información...</div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="flex-grid-plp">
              <div className="col-plp-bg">
                <div className="container-img-pdp col-plp wh-70">
                  <img
                    className=""
                    src={data?.picture}
                    alt={data?.item.title}
                  />
                </div>
                <div className="col-plp wh-30 pd-l-r-1rem">
                  <h1 className="h1 t-0, mt-0 mount">{data?.item?.title}</h1>
                  <p className="pt-0, mt-0 mount">
                    {" "}
                    $
                    {data?.item?.price &&
                      amountFormat(data?.item?.price.amount)}
                  </p>
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
                <div>
                  <p>{data?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Pdp;
