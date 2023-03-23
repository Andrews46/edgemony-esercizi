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
          <input
            type="text"
            placeholder="cognome"
            value={cognome}
            onChange={inputText}
          />
          <input type="date" value={data} onChange={inputData} />
          <input type="time" value={time} onChange={inputTime} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Prenotazione;
