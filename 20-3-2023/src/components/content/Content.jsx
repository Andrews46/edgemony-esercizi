// import { useState, useEffect } from "react";
import Card from "../card";
import "./index.scss";

const Content = ({ data }) => {
  return (
    <div className="Content">
      {data.map((cocktail, index) => (
        <Card data={cocktail} key={index} />
      ))}
    </div>
  );
};
export default Content;
