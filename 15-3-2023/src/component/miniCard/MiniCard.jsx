import MiniCardList from "../miniCardList";
import "./index.css";

const MiniCard = ({ imgSrc, imgAlt }) => {
  //  const onHandleClick = () => window.open(imgSrc, "_blank");
  return (
    <div>
      <MiniCardList />
      <img
        // onClick={onHandleClick}
        className="MiniCard"
        src={imgSrc}
        alt={imgAlt}
      />
    </div>
  );
};
export default MiniCard;
