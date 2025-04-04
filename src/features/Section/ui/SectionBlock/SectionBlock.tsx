import { ReactNode, FC } from "react";

import "./SectionBlock.scss";

interface ISectionBlock {
  children?: ReactNode;
}

const SectionBlock: FC<ISectionBlock> = ({ children }) => {
  return <div className="section-block">{children}</div>;
};

export default SectionBlock;
