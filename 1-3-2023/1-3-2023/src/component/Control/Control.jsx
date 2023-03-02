import Button from "../Button";
import "./index.css";

const Control = ({ listDataLength }) => {
  const getProductsNum = () =>
    alert(`Il numero di prodotti corrisponde a: ${listDataLength}`);
  return (
    <div className="Control">
      <Button
        text="Quanti prodotti?"
        clickFunc={getProductsNum}
        isDisabled={false}
      />
    </div>
  );
};

export default Control;
