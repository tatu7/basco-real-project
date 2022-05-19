import React, { useState } from "react";
import "./about.scss";
import ".././main.scss";
import plus from "../../Assets/images/plus (1).png";
import aylana from "../../Assets/images/aboutImg-1.png";
import refresh from "../../Assets/images/headImg-1.png";
import star from "../../Assets/images/star (1).png";
import { Fade } from "react-reveal";
function About() {
  const [shower, setShower] = useState(false);
  return (
    <section className="about">
      <h2 className="about__title">Hurmatli biznes egasi...</h2>
      <div className="about__parag">
        Bugun biznesni boshqarish, uni yangi bosqichlarga olib chiqish har
        qachon-gidan ham qiyin vazifa hisoblanadi. <br />
        <br /> Har bir biznesning o’ziga yarasha jarayonlari, maqsadlari va
        talablari bo’ladi. Agar biznesda barcha jarayonlarni, maqsadlarni va
        xodimlarni birlashtiradigan yagona texnologiya mavjud bo’lmasa, bugungi
        raqobatdosh bozorga dosh berish va rivojlanish mumkin bo’lmay qoladi.{" "}
        <br /> <br /> Agar sizning biznesingiz ham bir nechta bo’lim-larga va
        katta jamoaga ega bo’lsa… <br /> <br /> Sizga barcha biznes
        jarayonlarini avtomatlash-tiradigan, xodimlaringiz samaradorligini
        oshiradigan va xarajatlaringizni bir necha baravarga qisqartiradigan
        yagona yechim kerak.
      </div>
      {shower ? (
        <Fade top>
          <div className="about__parag">
            Agar bunday texnologiya biznesingizda mavjud bo’lmasa, siz bor
            vaqtingizni biznesingizning rivojlanishiga hech qanday hissa
            qo’shmaydigan murakkab va mayda ishlar bilan band bo’lib qolasiz.
            Xodimlaringizning samaradorligi tushib, mijozlaringizning
            talablarini bajara olmaysiz. Natijada, ular sizni emas,
            raqobatchilaringizni tanlab ketishadi. Bozordagi ulushingiz keskin
            kamayib, biznesingiz qutqarib bo’lmas jar yoqasiga kelib qoladi.
            Lekin, biz hozir bu xabarlar bilan sizning kayfiyatingizni
            tushirmoqchi emasmiz. Biz sizning shunday muammolaringizga yechim
            bermoqchimiz. Agar biznesingizning bugungi va ertangi holatiga
            befarq bo’lmasangiz… Har bir so’zimizni diqqat bilan o’qishni
            maslahat beramiz. Ishonamizki, sarflagan vaqtingiz siz uchun eng
            manfaatlisi bo’ladi.
          </div>
        </Fade>
      ) : (
        ""
      )}
      <div className="about--button">
        <button onClick={() => setShower(!shower)}>
          {shower ? "Yopish" : "Davomini o`qish "}
        </button>
      </div>

      <div className="about__images">
        <img className="img--1" src={plus} alt="" />
        <img className="img--2" src={aylana} alt="" />
        <img className="img--3" src={refresh} alt="" />
        <img className="img--4" src={star} alt="" />
      </div>
    </section>
  );
}

export default About;
