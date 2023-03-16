import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import "./index.css";

const Navbar = ({ cartListLength, setModalCart }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  const onClickModalCart = () => {
    setModalCart((prev) => ({ ...prev, isVisible: false }));
  };
  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca prodotto ..."
          required
        />
      </form>
      <p className="NavBarLength">
        <GiShoppingCart onClick={onClickModalCart} className="NavBar_cart" />
        {cartListLength}
      </p>
    </div>
  );
};

export default Navbar;
