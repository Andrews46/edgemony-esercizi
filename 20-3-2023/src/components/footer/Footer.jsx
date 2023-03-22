import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div>
        <h2>Cocktail list</h2>
        <div>
          <ul className={styles.list}>
            <li>
              <em>About</em>
            </li>
            <li>
              <em>Contact</em>
            </li>
            <li>
              <em>Privacy</em>
            </li>
          </ul>
          <h4>Create by Andrea Cosentino </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
