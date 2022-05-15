import About from "./Components/About/About";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Directions from "./Components/Directions/Directions";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Card /> */}
      <Directions />
    </div>
  );
}

export default App;
