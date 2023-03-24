import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import styles from "./index.module.scss";

const HamburgerMenu = () => {
  const [menu, setMenu] = useState(false);
  const visulHamburgerMenu = () => {
    setMenu((...prev) => !menu);
  };
  return (
    <div className={styles.HamburgerMenu}>
      <FiMenu onClick={visulHamburgerMenu} className={styles.Icon} />
      {menu && (
        <div className={styles.text}>
          <p className={styles.titleMenu}>
            Scegli la categoria che preferisci è fai il tuo ordine
          </p>
          <ul>
            <li>Ordinary Drink </li>
            <li>Cocktail speciali </li>
            <li>Shot</li>
            <li>Birra</li>
            <li>Altro</li>
            <button>Prenota</button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
