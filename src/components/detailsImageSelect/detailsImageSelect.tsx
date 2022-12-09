import "./detailsImageSelect.css";

type DetailsImageSelectProps = {
  imgSrc: string;
  isActive: boolean;
  onClick: () => void;
};

const DetailsImageSelect = ({
  imgSrc,
  isActive,
  onClick,
}: DetailsImageSelectProps) => {
  return (
    <div
      className={`image-select flex-center ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default DetailsImageSelect;
