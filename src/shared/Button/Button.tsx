import { FC } from "react";

import "./Button.scss";

interface IButton {
  text: string;
  disabled: boolean;
  handleClick: () => void;
}

const Button: FC<IButton> = ({ text, handleClick, disabled }) => {
  return (
    <button
      className="button"
      onClick={handleClick}
      disabled={disabled ? true : false}
    >
      {text}
    </button>
  );
};

export default Button;
