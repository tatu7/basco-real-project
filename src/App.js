import About from "./Components/About/About";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Directions from "./Components/Directions/Directions";
import Suggestions from "./Components/Suggestions/Suggestions";
import Questions from "./Components/Questions/Questions";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Card /> */}
      <Directions />
      <Suggestions />
      <Questions />
    </div>
  );
}

export default App;
