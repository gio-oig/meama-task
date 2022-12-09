import { memo } from "react";
import { Iciti } from "../../../types";
import Row from "../row/row";
import "./locationCard.css";

type LocationCardProp = {
  city: Iciti;
};

const LocationCard = ({ city }: LocationCardProp) => {
  return (
    <footer className="location-card">
      <img
        className="location__icon"
        src="https://meamacollect.ge/static/media/list-map-pin.e0a881da.svg"
        alt=""
      />
      <h3 className="location__title">{city.name}</h3>
      <p className="location__subtitle">{city.pointCount} ლოკაცია</p>
    </footer>
  );
};

type LocationRowProps = {
  cities?: Iciti[];
};

export const LocationRow = memo(({ cities }: LocationRowProps) => {
  return (
    <Row title="მისამართი">
      {cities?.map((city) => (
        <LocationCard key={city.id} city={city} />
      ))}
    </Row>
  );
});
