import React from "react";
import {
  orderInfo,
  productBought,
  recommendedProducts,
} from "../../../helper/staticData";
import ActionOptions from "./ActionOptions";
import Status from "./Status";
import "./css/OrderDetails.css";
import OrderDetailCard, { ProductCard } from "./OrderDetailCard";
const RecommendedProducts = ({ products = [] }) => {
  return (
    <div className="recommendedProducts bottomShadowcontainer">
      <h4>You may also like</h4>
      <div className="recommendedProducts__container">
        {products.map((product) => (
          <ProductCard product={product} size={140} key={product.id} />
        ))}
      </div>
    </div>
  );
};
const OrderDetails = () => {
  return (
    <div className="orderDetails">
      <Status orderInfo={orderInfo} />
      <div>
        <ActionOptions />
        <OrderDetailCard product={productBought} isProductBought={true} />
      </div>
      <RecommendedProducts products={recommendedProducts} />
    </div>
  );
};

export default OrderDetails;
