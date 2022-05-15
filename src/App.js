import About from "./Components/About/About";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Directions from "./Components/Directions/Directions";
import Suggestions from "./Components/Suggestions/Suggestions";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Card /> */}
      <Directions />
      <Suggestions />
    </div>
  );
}

export default App;
