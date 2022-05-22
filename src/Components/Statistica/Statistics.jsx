import React from "react";
import "./_statistica.scss";
import "../main.scss";
import chart1 from "../../Assets/images/adviceImg-4.png";
import chart2 from "../../Assets/images/adviceImg-5.png";
// import halqa from "../../Assets/images/adviceImg-1.png";
function Statistics() {
  return (
    <section className="statistica">
      <div className=" statistica__body">
        <div className="statistica__left">
          <img className="statistica__left--img--1" src={chart1} alt="" />
          <img className="statistica__left--img--2" src={chart2} alt="" />
          {/* <img className="statistica__left--img--3" src={halqa} alt="" /> */}
        </div>
        <div className="statistica__right">
          <h2 className="statistica__right--title">
            Biznesni avtomatlashtirish o’zi <br /> sizga nima beradi?
          </h2>
          <p className="statistica__right--parag">
            Biznesingizni qisqa muddatda rivojlanib, yangi bozorlarga jadallik
            bilan kirib borishi uchun bundan yaxshi yechimni topa olmaysiz!
          </p>
          <div className="statistica__right--item statistica__right--item--1 ">
            <div className="statistica__right--item--left">
              <h2>1</h2>
            </div>
            <div className="statistica__right--item--right">
              <b>Zaruriy jarayonlar avtomatlashadi</b>
              <p>
                ERP dasturlari siz doimiy ravishda bajarib yurgan murakkab
                jarayonlarni sodda, oson va aniq strategik boshqarishga yordam
                beradi.
              </p>
            </div>
          </div>
          <div className="statistica__right--item statistica__right--item--2  ajrat">
            <div className="statistica__right--item--left">
              <h2>2</h2>
            </div>
            <div className="statistica__right--item--right">
              <b>Xarajatlarni kamaytiradi</b>
              <p>
                Bunga o’zingiz ham ishonmagan bo’lardingiz. Avtomatlashtirish
                orqali operatsion xarajatlaringiz kamayadi. Kamroq ishchi kuchi
                va resurs bilan ko’proq vazifalarni amalga oshirasiz.
              </p>
            </div>
          </div>
          <div className="statistica__right--item statistica__right--item--3 ">
            <div className="statistica__right--item--left">
              <h2>3</h2>
            </div>
            <div className="statistica__right--item--right">
              <b>Samaradorlikni oshirish</b>
              <p>
                Inson qo’li bilan bajariladigan doimiy vazifalar yig’ilib borib
                juda ham ko’p vaqtin-gizni oladi. Avtomatlashtirish orqali
                ma’lumot almashinuvi tez amalga oshiriladi va xodimlaringiz
                samaradorligi oshadi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
