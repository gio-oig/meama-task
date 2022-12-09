import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/product.service";
import { ICategory, IProduct } from "../types";

export const useCategories = (slug?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const [product, setProduct] = useState<IProduct>();

  const findProductBySlug = (slug?: string) => {
    if (!data || !slug) return;
    let foundProduct: IProduct | undefined;

    for (let category of data) {
      if (category.subCategories.length) {
        for (let cat of category.subCategories) {
          const found = findProductBySlugInCategory(cat, slug);
          if (found) foundProduct = found;
        }
      }

      const found = findProductBySlugInCategory(category, slug);
      if (found) foundProduct = found;
    }

    return foundProduct;
  };

  const findProductBySlugInCategory = (category: ICategory, slug: string) => {
    return category.products.find(({ slug: pslug }) => pslug === slug);
  };

  useEffect(() => {
    if (!slug) return;

    const foundProduct = findProductBySlug(slug);
    setProduct(foundProduct);
  }, [data]);

  return {
    data,
    product,
    isLoading,
    findProductBySlug,
  };
};
