import React from "react";
import ".././main.scss";
import "./_card.scss";
import sun1 from "../../Assets/images/sun 1.png";
function Card() {
  return (
    <>
      <div className="card container">
        <div className="card__left">
          <h2 className="card__left--title">Statistik ma’lumot</h2>
          <p className="card__left--parag">
            “Kompaniyalar osongina avtomatlashtirilishi mumkin bo’lgan topshiriq
            va vazifalarga qimmatli vaqtlarining 23% qismini havoga
            sovurishadi.”
          </p>
          <p className="card__left--author">- Salesforce tadqiqoti</p>
        </div>
        <div className="card__right">
          <img src={sun1} alt="" />
        </div>
      </div>
    </>
  );
}

export default Card;
