import Card from "../card";
import "./index.scss";
import { filteredList } from "../../utils/funcs";

const Content = ({ data, category, setContextItem }) => {
  return (
    <div className="Content">
      {filteredList(data, "strCategory", category).map((cocktail, index) => (
        <Card data={cocktail} key={index} setContextItem={setContextItem} />
      ))}
    </div>
  );
};
export default Content;
