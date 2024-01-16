import "./App.css";
import Carousel from "./components/Carousel";
import Featured from "./components/Featured";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Carousel />
      <Header />
      <Featured />
    </div>
  );
}

export default App;
