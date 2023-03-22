import styles from "./index.module.scss";

const Card = ({ data, setContextItem }) => {
  const onHandleClick = () => {
    setContextItem((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
    }));
  };

  return (
    <div onClick={onHandleClick} className={styles.Card}>
      <img
        className={styles.image}
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
      <div className={styles.text}>
        <h3 className={styles.Title_Cocktail}>{data.strDrink}</h3>
        <ul>
          <li className={styles.ingrediente}>Ingredienti</li>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <li>{data.strIngredient4}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
