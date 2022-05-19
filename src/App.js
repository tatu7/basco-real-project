import About from "./Components/About/About";
import Card from "./Components/Card/Card";
import Advice from "./Components/Advice/Advice";
import Header from "./Components/Header/Header";
import Directions from "./Components/Directions/Directions";
import Suggestions from "./Components/Suggestions/Suggestions";
import Questions from "./Components/Questions/Questions";
import Platform from "./Components/Platform/Platform";
import Statistics from "./Components/Statistica/Statistics";
import Footer from "./Components/Footer/Footer";
import "./Components/main.scss";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <About /> */}
      {/* <Card /> */}
      {/* <Advice /> */}
      {/* <Statistics /> */}
      <Platform />
      {/*<Directions />
      <Suggestions />
      <Questions />
      <Footer /> */}
    </div>
  );
}

export default App;
