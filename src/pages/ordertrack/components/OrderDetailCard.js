import React from "react";
import ButtonWithIcon from "../commonComponents/ButtonWithIcon";
import replyImg from "../../../images/reply.svg";
import "./css/OrderDetailCard.css";
const OrderDetailCard = ({ product, isProductBought }) => {
  return (
    <div className="orderDetailCard bottomShadowcontainer ">
      <div className="orderDetailCard__top">
        <h4>Order Details</h4>
        <ButtonWithIcon
          icon={replyImg}
          text="Share the product"
          className="clrPrimary"
        />
      </div>
      <ProductCard product={product} isProductBought={isProductBought} />
    </div>
  );
};
export function ProductCard({ product, isProductBought, size = 80 }) {
  const { price, title, description, otherInfo, photoUrl } = product;
  return (
    <div className={`productCard ${isProductBought ? "flexDirectionRow" : ""}`}>
      <div
        style={{
          backgroundImage: `url(${photoUrl})`,
          width: size,
          height: size,
        }}
        className="photoContainer cursorpointer"
      ></div>
      <div className="productCard__info">
        <h4>{title}</h4>
        <p className="clrgrey">{description}</p>
        {isProductBought && <p className="clrgrey">{otherInfo}</p>}
        <h3>{price}</h3>
      </div>
    </div>
  );
}
export default OrderDetailCard;
