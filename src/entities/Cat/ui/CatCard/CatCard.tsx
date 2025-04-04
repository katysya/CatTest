import { Button, Image, CheckBox } from "@/shared/index";
import { checkboxData } from "@/shared/config/constants";

import "./CatCard.scss";

const CatCard = () => {
  return (
    <div className="cat-card">
      {checkboxData.map((item, index) => (
        <CheckBox key={index} name={item.name} text={item.text} />
      ))}
      <Button text="Get Cat" />
      <Image />
    </div>
  );
};

export default CatCard;
