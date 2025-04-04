import { useEffect, useState } from "react";
import { Button, Image, CheckBox, PreLoader } from "@/shared/index";
import { checkboxData, request } from "@/shared/config/constants";
import ErrorImage from "../../assets/images/error.svg";

import "./CatCard.scss";

interface ICat {
  id: string;
  url: string;
  width: number;
  height: number;
}

const CatCard = () => {
  const [cat, setCat] = useState<ICat | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCat();
  }, []);

  const getCat = async () => {
    setLoading(true);
    setCat(null);
    setError("");

    try {
      const response = await fetch(request);

      if (!response.ok) {
        throw new Error("...");
      }

      const result = await response.json();
      setCat(result[0]);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(cat);
  }, [cat]);

  return (
    <div className="cat-card">
      {checkboxData.map((item, index) => (
        <CheckBox key={index} name={item.name} text={item.text} />
      ))}
      <Button text="Get Cat" handleClick={getCat} />
      <div className="cat-card__img">
        {loading && <PreLoader />}
        {cat && <Image src={cat.url} />}
        {error && (
          <div className="cat-card__error">
            <img className="cat-card__error-img" src={ErrorImage} />
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatCard;
