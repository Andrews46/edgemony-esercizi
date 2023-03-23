import styles from "./index.module.scss";

const SingleItem = ({ data, setContextItem }) => {
  const onHandleClick = () =>
    setContextItem((prev) => ({
      ...prev,
      isVisible: false,
    }));
  console.log(data);

  return (
    <div className={styles.SingleItem}>
      <div className={styles.Content}>
        <div className={styles.text}>
          <h2>Ingredienti</h2>
          <ul>
            <li>{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
            <li>{data.strIngredient4}</li>
          </ul>
          <h2>Istruzioni</h2>
          <ul>
            <li>{data.strInstructionsIT}</li>
          </ul>
          <button className={styles.close} onClick={onHandleClick}>
            X
          </button>
        </div>
        <div className={styles.image}>
          <img
            className={styles.imageRandom}
            src={data.strDrinkThumb}
            alt={data.strDrink}
          />
          <div className={styles.carousel}>
            <button>Indietro</button>
            <button>Avanti</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleItem;
