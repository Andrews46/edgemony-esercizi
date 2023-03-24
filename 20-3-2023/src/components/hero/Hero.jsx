// import styles from "./index.module.scss";
import styled from "styled-components";

const HeroContainer = styled.div`
  padding: 0;
`;

const HeroImage = styled.img`
  margin: 0;
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
`;

const HeroLista = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  cursor: pointer;
  color: rgb(220, 200, 70);
  font-weight: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const Hero = ({ data, setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };
  return (
    <HeroContainer>
      <HeroImage
        src="https://caffedimilano.co.uk/wp-content/uploads/2021/06/cocktails-birmingham-1536x1024.jpg"
        alt="image"
      />
      <HeroLista>
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleClick("Beer")}>Birra</li>
        <li onClick={() => onHandleClick("Other / Unknown")}>Altro</li>
      </HeroLista>
    </HeroContainer>
  );
};
export default Hero;
