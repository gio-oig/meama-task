import { ReactNode } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

type RowProps = {
  title: string;
  children: ReactNode;
};

const Row = ({ title, children }: RowProps) => {
  return (
    <div className="product-row">
      <h3 className="product-row__title">{title}</h3>
      <ScrollContainer className="scroll-container container">
        {children}
      </ScrollContainer>
    </div>
  );
};

export default Row;
