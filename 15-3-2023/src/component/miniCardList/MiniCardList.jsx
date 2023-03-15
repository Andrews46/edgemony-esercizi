import { useState, useEffect } from "react";
import MiniCard from "../miniCard";
import { GET } from "../../utils/http";
import "./index.css";

const MiniCardList = () => {
  const [cardMini, setCardMini] = useState([]);
  const [test, setTest] = useState([]);
  //   useEffect(() => {
  //     setTest(["ciao"]);
  //     console.log("ciao");
  //     GET("/products").then((data) => {
  //       setTest(data.products);
  //     });
  //   }, []);

  return (
    <div className="MiniCardList">
      {test.map((data) => (
        <MiniCard imgSrc={data.thumbnail} imgAlt={data.title} key={data.id} />
      ))}
    </div>
  );
};

export default MiniCardList;
