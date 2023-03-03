import { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./index.css";

const ListProducts = ({ setSingleProductModel }) => {
  const [object, setObject] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=fa0edb156ade1964e285bec9ce2d236b&language=it-IT&page=1"
    )
      .then((res) => res.json())
      .then((data) => setObject(data.results));
  }, []);

  return (
    <div className="ListProducts">
      {object.map((results) => (
        <CardProduct
          productData={results}
          setSingleProductModel={setSingleProductModel}
          key={results.id}
        />
      ))}
    </div>
  );
};

export default ListProducts;
