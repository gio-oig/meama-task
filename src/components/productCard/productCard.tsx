import { IProduct } from "../../types";
import c from "classnames";

import "./productCard.css";

type ProductCardProps = {
  isSmall: boolean;
  product: IProduct;
  onClick: () => void;
};

const ProductCard = ({ product, isSmall, onClick }: ProductCardProps) => {
  const cardClass = c("product-card", {
    "product-card--small": isSmall,
  });

  console.log("productCard");

  return (
    <div className={cardClass} onClick={onClick}>
      <div className="product-card__img">
        <img className="product-img" src={product.mainPhoto} alt="" />
      </div>
      <div className="product-card__info">
        <p>{product.name}</p>
        <h4>{product.price}₾</h4>
      </div>
    </div>
  );
};

export default ProductCard;
