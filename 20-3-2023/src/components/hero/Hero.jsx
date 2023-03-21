import "./index.scss";

const Hero = ({ data, setCategory }) => {
  const obj = [
    { id: 1, textcontent: "Ordinary Drink", key: "Cocktail" },
    { id: 2, textcontent: "Cocktail", key: "Shot" },
    { id: 3, textcontent: "Shot", key: "Ordinary Drink" },
    { id: 4, textcontent: "Punch", key: "Other / Unknown" },
    { id: 5, textcontent: "Coffee", key: "Punch / Party Drink" },
    { id: 6, textcontent: "Other", key: "Coffee / Tea" },
  ];
  const onHandleClick = (value) => {
    setCategory(value);
  };
  return (
    <div className="Hero">
      <h1>Lista Cocktail </h1>
      <img
        className="Hero_image"
        src="https://caffedimilano.co.uk/wp-content/uploads/2021/06/cocktails-birmingham-1536x1024.jpg"
        alt="image"
      />
      <ul className="Hero_lista">
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleClick("Beer")}>Birra</li>
        <li onClick={() => onHandleClick("Other / Unknown")}>Altro</li>
      </ul>
    </div>
  );
};
export default Hero;
