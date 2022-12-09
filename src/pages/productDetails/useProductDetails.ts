import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useCategories } from "../../queryHook/useCategories";
import { IProduct } from "../../types";

const bodyClass = "visible-product-detail";

type useProductDetailsReturn = {
  product: IProduct | undefined;
  closeModal: () => void;
};

const useProductDetails = (): useProductDetailsReturn => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { product } = useCategories(slug);

  const openModal = () => {
    setTimeout(() => {
      document.body.classList.add(bodyClass);
    }, 0);
  };

  const closeModal = () => {
    document.body.classList.remove(bodyClass);

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  useEffect(() => {
    openModal();
  }, []);

  return {
    product,
    closeModal,
  };
};

export default useProductDetails;
