import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { GrSearch } from "react-icons/gr";
import "./index.css";

const Navbar = ({ cartListLength, setModalCart, setSearchInputValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSearchInputValue(() => inputValue);
  };
  const onClickModalCart = () => {
    setModalCart((prev) => ({ ...prev, visible: true }));
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
      <p className="NavBarLength">{cartListLength}</p>
      <GiShoppingCart onClick={onClickModalCart} className="NavBar_cart" />
    </div>
  );
};

export default Navbar;
