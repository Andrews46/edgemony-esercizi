import { useState } from "react";
import "./index.css";
import { images } from "./images";
// import Button from "../Button";

const Gallery = () => {
  const [changeImage, setchangeImage] = useState(0);
  const avanti = () => {
    if (changeImage < images.length - 1) {
      setchangeImage(changeImage + 1);
    }
  };
  const indietro = () => {
    if (changeImage > 0) {
      setchangeImage(changeImage - 1);
    }
  };
  return (
    <div className="Gallery">
      <img src={images[changeImage].url} alt={images[changeImage].name} />

      <div className="btn">
        <button onClick={() => avanti()}>{">"}</button>
        <button onClick={() => indietro()}>{"<"}</button>
      </div>
    </div>
  );
};

export default Gallery;
