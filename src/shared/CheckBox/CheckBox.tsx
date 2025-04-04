import { FC } from "react";

import "./CheckBox.scss";

interface ICheckBox {
  name: string;
  text: string;
  check: boolean;
  change: (e: any) => void;
}

const CheckBox: FC<ICheckBox> = ({ name, text, check, change }) => {
  return (
    <div>
      <div className="checkbox">
        <input
          type="checkbox"
          id={name}
          className="checkbox__input"
          checked={check ? true : false}
          onChange={(e) => change(e)}
        />
        <label htmlFor={name} className="checkbox__label">
          <span className="checkbox__done">
            <svg
              className="checkbox__icon"
              viewBox="0 0 12 10"
              height="10px"
              width="12px"
            >
              <polyline
                className="checkbox__polyline"
                points="1.5 6 4.5 9 10.5 1"
              ></polyline>
            </svg>
          </span>
          <span className="checkbox__text">{text}</span>
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
