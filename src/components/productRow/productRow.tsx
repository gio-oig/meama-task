import { useMemo, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useNavigate } from "react-router";
import { ICategory } from "../../types";

import "./productRow.css";
import ProductCard from "../productCard/productCard";
import Filter from "../filter/filter";
import findByname from "../../utils/findByName";

type ProductRowProps = {
  category: ICategory;
};

const ProductRow = ({ category }: ProductRowProps) => {
  const navigate = useNavigate();
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    category.subCategories[0]?.name || ""
  );

  const handleCategorySelect = (category: string) => {
    setSelectedSubCategory(category);
  };

  const productsToRender = useMemo(() => {
    if (!category.subCategories.length) {
      return category.products;
    }

    const foundCategory = findByname(
      category.subCategories,
      selectedSubCategory
    );

    return foundCategory?.products || [];
  }, [category, selectedSubCategory]);

  return (
    <div className="product-row">
      <h3 className="product-row__title">{category.name}</h3>
      <div className="filter-container">
        {category.subCategories.map(({ name }) => (
          <Filter
            key={name}
            isActive={name === selectedSubCategory}
            value={name}
            onSelect={() => handleCategorySelect(name)}
          />
        ))}
      </div>
      <ScrollContainer className="scroll-container container">
        {productsToRender.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSmall={category.categoryType === "SMALL"}
            onClick={() => navigate(`/product/${product.slug}`)}
          />
        ))}
      </ScrollContainer>
    </div>
  );
};

export default ProductRow;
