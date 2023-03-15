import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__text">
        <h1>Ecommerce</h1>
        <h3>Il miglior marketplace</h3>
      </div>
      <img
        className="Hero__img"
        src="https://wips.plug.it/cips/italiaonline.it/blog/cms/2021/06/e-commerce-crescita-1.jpg"
        alt="hero image"
      />
    </div>
  );
};
export default Hero;
