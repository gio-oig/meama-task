import { ICapsule, ISpecification } from "../../types";
import "./capsule.css";

type CapsuleProps = {
  capsule: ICapsule;
};

const Capsule = ({ capsule }: CapsuleProps) => {
  return (
    <div className="capsule">
      <div className="capsule__image" style={{ background: capsule.bgColor }}>
        <img src={capsule.imgUrl} alt="" />
      </div>
      <div className="capsule__info">
        <div className="capsule__title">{capsule.name}</div>
        {capsule.specifications.map((spec, i) => (
          <CapsuleSpesification key={i} data={spec} />
        ))}
      </div>
    </div>
  );
};

export default Capsule;

type CapsuleSpecificationProps = {
  data: ISpecification;
};

const CapsuleSpesification = ({ data }: CapsuleSpecificationProps) => {
  return (
    <div className="capsule__specification">
      <p className="capsule__specification__title">{data.name}</p>
      <div className="line">
        <div className="inner-line" style={{ width: `${data.value}0%` }}></div>
      </div>
      <div className="value">
        {data.value} / {data.maxValue}
      </div>
    </div>
  );
};
