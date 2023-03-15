import CardList from "./component/cardList";
import NavBar from "./component/navBar";
import Hero from "./component/hero";
import MiniCard from "./component/miniCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <MiniCard />
      <CardList title="Technology" endpoint="/products?limit=10" />
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" />
    </div>
  );
}

export default App;
