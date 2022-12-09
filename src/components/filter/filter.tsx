type FilterProps = {
  isActive: boolean;
  onSelect: () => void;
  value: string;
};

const Filter = ({ isActive, value, onSelect }: FilterProps) => (
  <div className={`filter ${isActive ? "active" : ""}`} onClick={onSelect}>
    {value}
  </div>
);

export default Filter;
