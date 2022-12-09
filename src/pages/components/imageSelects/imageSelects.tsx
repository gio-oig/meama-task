import { Dispatch, SetStateAction } from "react";
import DetailsImageSelect from "../detailsImageSelect/detailsImageSelect";
import c from "classnames";

type ImageSelectsProps = {
  isHidden: boolean;
  imgLinks: string[];
  selectedImageIndex: number;
  selectNewIndex: Dispatch<SetStateAction<number>>;
};

const ImageSelects = ({
  isHidden,
  imgLinks,
  selectNewIndex,
  selectedImageIndex,
}: ImageSelectsProps) => {
  const containerClass = c("image-selects", {
    hidden: isHidden,
  });
  return (
    <div className={containerClass}>
      {imgLinks.map((imgSrc, i) => (
        <DetailsImageSelect
          key={imgSrc}
          imgSrc={imgSrc}
          isActive={selectedImageIndex === i}
          onClick={() => selectNewIndex(i)}
        />
      ))}
    </div>
  );
};

export default ImageSelects;
