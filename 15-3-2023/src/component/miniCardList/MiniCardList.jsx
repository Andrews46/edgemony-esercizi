import { useState, useEffect } from "react";
import MiniCard from "../miniCard";
import { GET } from "../../utils/http";
import "./index.css";

const MiniCardList = () => {
  const [cardMini, setCardMini] = useState([]);
  useEffect(() => {
    GET("/products").then((data) => setCardMini(() => data.products));
  }, []);

  return (
    <div className="MiniCardList">
      {cardMini.map((data) => (
        <MiniCard imgSrc={data.thumbnail} imgAlt={data.title} key={data.id} />
      ))}
    </div>
  );
};

export default MiniCardList;
