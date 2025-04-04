import { FC } from "react";
import "./Image.scss";

interface IImage {
  src: string;
}

const Image: FC<IImage> = ({ src }) => {
  return (
    <div className="image">
      <img className="image__content" src={src} alt="" />
    </div>
  );
};

export default Image;
