import { FC } from "react";

import "./Button.scss";

interface IButton {
  text: string;
  handleClick: () => void;
}

const Button: FC<IButton> = ({ text, handleClick }) => {
  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
