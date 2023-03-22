import Card from "../card";
import styles from "./index.module.scss";
import { filteredList } from "../../utils/funcs";

const Content = ({ data, category, setContextItem }) => {
  return (
    <div className={styles.Content}>
      {filteredList(data, "strCategory", category).map((cocktail, index) => (
        <Card data={cocktail} key={index} setContextItem={setContextItem} />
      ))}
    </div>
  );
};
export default Content;
