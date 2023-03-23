import style from "./index.module.scss";
import { useState } from "react";
const Prenotazione = ({ setVisualPrenotazione, setVisualPopup }) => {
  const [cognome, setCognome] = useState("");
  const [data, setData] = useState("");
  const [time, setTime] = useState("");

  const inputText = (e) => setCognome(e.target.value);
  const inputData = (e) => setData(e.target.value);
  const inputTime = (e) => setTime(e.target.value);

  const onHandleClose = () => {
    setVisualPrenotazione(false);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setVisualPopup(true);
    setVisualPrenotazione(false);
  };
  return (
    <div className={style.Prenotazione}>
      <div className={style.overlay} onClick={onHandleClose}></div>
      <div className={style.formPrenotazione}>
        <form className={style.inputForm} onSubmit={onHandleSubmit}>
          <h2>
            <em>Fai la tua Prenotazione</em>
          </h2>
          <label htmlFor="text">
            <em>Scrivi un cognome</em>
          </label>
          <input
            type="text"
            placeholder="cognome"
            value={cognome}
            onChange={inputText}
          />
          <label htmlFor="date">
            <em>Scegli una data</em>
          </label>
          <input type="date" value={data} onChange={inputData} />
          <label htmlFor="time">
            <em>Scegli l'ora</em>
          </label>
          <input type="time" value={time} onChange={inputTime} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Prenotazione;
