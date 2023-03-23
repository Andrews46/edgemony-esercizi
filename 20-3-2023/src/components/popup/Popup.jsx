import style from "./index.module.scss";

const Popup = ({ setVisualPopup }) => {
  const onHandleClose = () => {
    setVisualPopup(false);
  };
  setTimeout(() => {
    setVisualPopup(false);
  }, 2000);

  return (
    <div className={style.Popup} onClick={onHandleClose}>
      <div className={style.text}>
        <h2>Prenotazione effettuata</h2>
      </div>
    </div>
  );
};
export default Popup;
