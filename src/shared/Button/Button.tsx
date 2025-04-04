import { FC } from "react";

import "./Button.scss";

interface IButton {
  text: string;
}

const Button: FC<IButton> = ({ text }) => {
  return <button className="button">{text}</button>;
};

export default Button;
