import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="title">
      <Header />
      <Footer title="Footer della prima applicazione React" />
    </div>
  );
};

export default App;
