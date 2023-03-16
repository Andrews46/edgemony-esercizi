import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Card from "../card";
import "./index.css";

const CardList = ({ title, endpoint, setModalContext }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setProductsList(() => data.products));
  }, []);
  return (
    <div className="CardList">
      <h2>{title}</h2>
      <div className="CardList__list">
        {productsList.map((product) => (
          <Card
            productData={product}
            setModalContext={setModalContext}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
