import React from "react";
import "./about.scss";
import ".././main.scss";
import Button from "../../UI/Button/Button";
import plus from "../../Assets/images/plus (1).png";
import aylana from "../../Assets/images/aboutImg-1.png";
import refresh from "../../Assets/images/headImg-1.png";
import star from "../../Assets/images/star (1).png";
function About() {
  return (
    <section className="about">
      <h2 className="about__title">Hurmatli biznes egasi...</h2>
      <div className="about__parag">
        Bugun biznesni boshqarish, uni yangi bosqichlarga olib chiqish har
        qachon-gidan ham qiyin vazifa hisoblanadi.Har bir biznesning o’ziga
        yarasha jarayonlari, maqsadlari va talablari bo’ladi. Agar biznesda
        barcha jarayonlarni, maqsadlarni va xodimlarni birlashtiradigan yagona
        texnologiya mavjud bo’lmasa, bugungi raqobatdosh bozorga dosh berish va
        rivojlanish mumkin bo’lmay qoladi.Agar sizning biznesingiz ham bir
        nechta bo’lim-larga va katta jamoaga ega bo’lsa…Sizga barcha biznes
        jarayonlarini avtomatlash-tiradigan, xodimlaringiz samaradorligini
        oshiradigan va xarajatlaringizni bir necha baravarga qisqartiradigan
        yagona yechim kerak.
      </div>
      <div className="about__more--button">
        <Button>Davomini o’qish</Button>
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
