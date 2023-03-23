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
          <h2 className={styles.titleMenu}>Scegli Il Cocktail perfetto</h2>
          <ul>
            <li>Cocktail analcolici </li>
            <li>Cocktail speciali </li>
            <li>I più gettonati</li>
            <button>Prenota</button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
