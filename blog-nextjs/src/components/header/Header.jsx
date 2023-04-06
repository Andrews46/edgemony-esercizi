import styles from "./index.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Header;
