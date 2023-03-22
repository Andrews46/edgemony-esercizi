import HamburgerMenu from "../hamburgerMenu";
import styles from "./index.module.scss";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <ul className={styles.lista}>
        <HamburgerMenu />
        <h2>Scegli Il Cocktail perfetto</h2>
        <li>Cocktail analcolici </li>
        <li>Cocktail speciali </li>
        <li>I più gettonati</li>
      </ul>
    </div>
  );
};
export default NavBar;
