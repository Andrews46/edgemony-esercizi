import "./index.css";
import { images } from "./images";
const Gallery = () => {
  return (
    <div className="Gallery">
      {images.map((img) => (
        <img src={img.url} alt={img.name} />
      ))}
    </div>
  );
};

export default Gallery;
