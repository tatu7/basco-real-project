import "./Components/main.scss";
import Blog1 from "./Components/Blog/Blog1";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Blog2 from "./Components/Blog/Blog2";
import Blog3 from "./Components/Blog/Blog3";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
      </Routes>
    </div>
  );
}

export default App;
