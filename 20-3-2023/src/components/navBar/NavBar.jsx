import HamburgerMenu from "../hamburgerMenu";
import styles from "./index.module.scss";

const NavBar = ({ setVisualPrenotazione }) => {
  const onHandleClick = () => {
    setVisualPrenotazione(true);
  };
  return (
    <div className={styles.NavBar}>
      <ul className={styles.lista}>
        <HamburgerMenu />
        <h2>
          <em>Scegli Il Cocktail perfetto</em>
        </h2>
        <li>Cocktail analcolici </li>
        <li>Cocktail speciali </li>
        <li>I più gettonati</li>
        <button onClick={onHandleClick}>Prenota</button>
      </ul>
    </div>
  );
};
export default NavBar;
