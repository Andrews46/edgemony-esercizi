import styles from "./index.module.scss";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

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
          <h2>Scegli Il Cocktail perfetto</h2>
          <li>Cocktail analcolici </li>
          <li>Cocktail speciali </li>
          <li>I più gettonati</li>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
