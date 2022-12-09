import { useState } from "react";
import Capsule from "../../components/capsule/capsule";
import "./productDetails.css";
import ImageSelects from "../../components/imageSelects/imageSelects";
import useProductDetails from "./useProductDetails";

export const ProductDetails = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { product, closeModal } = useProductDetails();

  return (
    <div className="product-details">
      <div className="product-details-wrapper">
        <div className="details__header">
          <div className="back" onClick={closeModal}>
            <img
              src="https://meamacollect.ge/static/media/back-arrow.c7597fb1.svg"
              alt=""
            />
          </div>
          <div>EN</div>
        </div>
        <div className="info">
          <div className="info-data">
            <h2 className="info__title">{product?.name}</h2>
            <p className="info__price">{product?.price}&#8382;</p>
            {product?.specifications.map(({ name, value }) => (
              <div key={name} className="info__specifications">
                <p className="info__specifications__title">{name}</p>
                <p className="info__specifications__size">{value}</p>
              </div>
            ))}
            <ImageSelects
              isHidden={!!(product && product.imgUrls.length <= 1)}
              imgLinks={product?.imgUrls || []}
              selectedImageIndex={selectedImageIndex}
              selectNewIndex={setSelectedImageIndex}
            />
          </div>
          <div className="info-images-container">
            <div className="images-container">
              <div className="bg" style={{ background: product?.bgColor }} />
              {product?.imgUrls.map((imgSrc, i) => (
                <img
                  key={imgSrc}
                  className={i === selectedImageIndex ? "active" : ""}
                  src={imgSrc}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
        <div className="product-desctiontion">
          <h4 className="product-desctiontion__title">აღწერა</h4>
          <div
            className="product-desctiontion__text"
            dangerouslySetInnerHTML={{ __html: product?.description || "" }}
          />
        </div>
        {!!product?.capsuleProducts.length && (
          <section className="bottom">
            <div className="border-line"></div>
            <h4 className="bottom__title">მზადდება ყავის კაფსულით:</h4>
            <div className="capsules">
              {product.capsuleProducts.map((capsule) => (
                <Capsule key={capsule.id} capsule={capsule} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
