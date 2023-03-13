import Button from "../Button";
import "./index.css";

const Modal = ({ setModalOpen }) => {
  return (
    <div className="Modal">
      <div className="Modal__content">
        <h3>Salve, se vuoi continuare, accetta</h3>
        <div className="Modal__btn">
          <Button
            text="Annulla"
            clickFunc={() => alert("Se non accetti non entri")}
          />
          <Button
            text="Accetta"
            clickFunc={() => setModalOpen((prev) => false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
