import React from "react";
import Card from "./Card/Card";

import About from "./About/About";
import Advice from "./Advice/Advice";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Platform from "./Platform/Platform";
import Questions from "./Questions/Questions";
import Statistics from "./Statistica/Statistics";
import Suggestions from "./Suggestions/Suggestions";
import Directions from "./Directions/Directions";
import Slider from "react-slick";
function Home() {
  return (
    <>
      <Header />
      <About />
      <Card />
      <Advice />
      <Statistics />
      <Platform />
      <Directions />
      <Suggestions />
      <Questions />
      <Footer />
    </>
  );
}

export default Home;
