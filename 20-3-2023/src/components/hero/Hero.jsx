import "./index.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <h1>Lista Cocktail </h1>
      <img
        className="Hero_image"
        src="https://caffedimilano.co.uk/wp-content/uploads/2021/06/cocktails-birmingham-1536x1024.jpg"
        alt="image"
      />
      <ul className="Hero_lista">
        <li>Ordinary Drink</li>
        <li>Cocktail</li>
        <li>Shot</li>
        <li>Punch</li>
        <li>Coffee</li>
        <li>Other</li>
      </ul>
    </div>
  );
};
export default Hero;
