import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProductDetails,
  searchProductDescription,
} from "../../api/mercadolibre";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { ProductDescriptionProps } from "../../interfaces/productDescription";
import { ProductDetails } from "../../interfaces/productDetails";
import { amountFormat } from "../../utils/functions";

const Pdp = () => {
  let { id } = useParams();

  const [item, setItem] = useState<ProductDetails>();
  const [itemDescription, setItemDescription] = useState("");

  useEffect(() => {
    if (id) {
      getProductDetails(id).then((response: ProductDetails) => {
        setItem(response);
      });

      searchProductDescription(id).then((response: ProductDescriptionProps) => {
        const value = response.plain_text.replace("\n", " ");
        setItemDescription(value);
      });
    }
  }, [id]);

  return (
    <main>
      {/* <Breadcrumb categories={[]} currentLink={''}/> */}
      <div className="container">
        <div className="flex-grid-plp">
          <div className="col-plp-bg">
            <div className="container-img-pdp col-plp wh-70">
              <img className="" src={item?.picture} alt={item?.item.title} />
            </div>
            <div className="col-plp wh-30 pd-l-r-1rem">
              <h1 className="h1 t-0, mt-0 mount">{item?.item?.title}</h1>
              <p className="pt-0, mt-0 mount">
                {" "}
                ${item?.item?.price && amountFormat(item?.item?.price.amount)}
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
              <p>{itemDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pdp;
