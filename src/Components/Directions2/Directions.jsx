import React, { useState } from "react";
import ".././main.scss";
import "./_directions.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trade from "../../Assets/images/icon-2.png";
import resource from "../../Assets/images/icon-3.png";
import house from "../../Assets/images/icon-6.png";
import star from "../../Assets/images/icon-8.png";
import setting from "../../Assets/images/icon-7.png";
import saveMoney from "../../Assets/images/icon-4.png";
import kluch from "../../Assets/images/icon-1.png";
import money from "../../Assets/images/icon-5.png";

import { AiOutlineRight } from "react-icons/ai";
function Directions() {
  const [shower, setShower] = useState(false);
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="directions">
        <div className=" container">
          <div className="directions-top">
            <h3 className="directions-top__subject">
              Basco ERP platforma yo'nalishlari
            </h3>
            <p className="directions-top__text">
              Basco ERP platformasining yo’nalishlari - biznesingizning barcha
              bo'limlari uchun yagona komplex yechim
            </p>
          </div>

          <div className="directions-middle">
            <ul className="directions-middle__list">
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--1">
                    <img
                      src={kluch}
                      alt="trade"
                      className="directions-middle-card__img "
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    CRM boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Mijozlar bilan munosabat- larni boshqarishni avtomat-
                    lashtirish uchun qulay va optimal yondashuv
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--1">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--2">
                    <img
                      src={trade}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Savdo boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Savdo jarayonlari boshqa-ruvi, nazorati va analizi
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--2">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--3">
                    <img
                      src={resource}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    HR boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kerakli kadrlar va barcha xodimlar maʼlumotlar qoʼl
                    ostingizda!
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--3">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--4">
                    <img
                      src={saveMoney}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Hisob-kitob boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Xodimlarning maoshi va kompaniyaning hisob-kitobi uchun
                    optimal yondashuv
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--4">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--5">
                    <img
                      src={money}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Kassa boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Kompaniyaning barcha turdagi pul mablagʼlarining aniq va
                    ishonchli yuritilishi
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--5">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--6">
                    <img
                      src={house}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Sklad boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Sklad boʼlimi savdo vaqtida tayyor mahsulotlar harakati va
                    qoldigʼini real vaqt reji-mida koʼrib turish imkoniyati.
                  </p>
                  <button className="directions-middle-card__btn  directions-middle-card__btn--6">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--7">
                    <img src={setting} alt="trade" className=" " />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Nazorat boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Korxona ichki qonun-qoida-lari va tartibi nazoratini yagona
                    baza orqali nazorat qilish imkoniyatini beradi
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--7">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
              <li className="directions-middle__item">
                <div className="directions-middle__card">
                  <div className="directions-middle-card__box directions-middle-card__box--8">
                    <img
                      src={star}
                      alt="trade"
                      className="directions-middle-card__img"
                    />
                  </div>
                  <h3 className="directions-middle-card__subject">
                    Rahbar boʼlimi
                  </h3>
                  <p className="directions-middle-card__text">
                    Rahbar uchun barcha imko-niyatlar bir joyda. Rahbar sifatida
                    sizning vaqtingiz ejaladi, samaradorlik oshadi.
                  </p>
                  <button className="directions-middle-card__btn directions-middle-card__btn--8">
                    Batafsil{" "}
                    <span className="directions-middle-card__btn-span">
                      <AiOutlineRight />
                    </span>
                  </button>
                </div>
              </li>
            </ul>
            <div className="slider">
              <Slider {...settings} className="bolim__slider">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--1">
                      <img
                        src={kluch}
                        alt="trade"
                        className="directions-middle-card__img "
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      CRM boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Mijozlar bilan munosabat- larni boshqarishni avtomat-
                      lashtirish uchun qulay va optimal yondashuv
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--1">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--2">
                      <img
                        src={trade}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Savdo boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Savdo jarayonlari boshqa-ruvi, nazorati va analizi
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--2">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--3">
                      <img
                        src={resource}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      HR boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Kerakli kadrlar va barcha xodimlar maʼlumotlar qoʼl
                      ostingizda!
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--3">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--4">
                      <img
                        src={saveMoney}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Hisob-kitob boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Xodimlarning maoshi va kompaniyaning hisob-kitobi uchun
                      optimal yondashuv
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--4">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--5">
                      <img
                        src={money}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Kassa boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Kompaniyaning barcha turdagi pul mablagʼlarining aniq va
                      ishonchli yuritilishi
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--5">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--6">
                      <img
                        src={house}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Sklad boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Sklad boʼlimi savdo vaqtida tayyor mahsulotlar harakati va
                      qoldigʼini real vaqt reji-mida koʼrib turish imkoniyati.
                    </p>
                    <button className="directions-middle-card__btn  directions-middle-card__btn--6">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--7">
                      <img src={setting} alt="trade" className=" " />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Nazorat boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Korxona ichki qonun-qoida-lari va tartibi nazoratini
                      yagona baza orqali nazorat qilish imkoniyatini beradi
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--7">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box directions-middle-card__box--8">
                      <img
                        src={star}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      Rahbar boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Rahbar uchun barcha imko-niyatlar bir joyda. Rahbar
                      sifatida sizning vaqtingiz ejaladi, samaradorlik oshadi.
                    </p>
                    <button className="directions-middle-card__btn directions-middle-card__btn--8">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </Slider>
            </div>
          </div>
          {shower ? (
            <div className="directions-middle">
              <ul className="directions-middle__list">
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box">
                      <img
                        width={62}
                        height={62}
                        src={trade}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      CRM boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Mijozlar bilan munosabat- larni boshqarishni avtomat-
                      lashtirish uchun qulay va optimal yondashuv
                    </p>
                    <button className="directions-middle-card__btn">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box">
                      <img
                        src={trade}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      CRM boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Mijozlar bilan munosabat- larni boshqarishni avtomat-
                      lashtirish uchun qulay va optimal yondashuv
                    </p>
                    <button className="directions-middle-card__btn">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box">
                      <img
                        src={trade}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      CRM boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Mijozlar bilan munosabat- larni boshqarishni avtomat-
                      lashtirish uchun qulay va optimal yondashuv
                    </p>
                    <button className="directions-middle-card__btn">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box">
                      <img
                        src={trade}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      CRM boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Mijozlar bilan munosabat- larni boshqarishni avtomat-
                      lashtirish uchun qulay va optimal yondashuv
                    </p>
                    <button className="directions-middle-card__btn">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box">
                      <img
                        src={trade}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      CRM boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Mijozlar bilan munosabat- larni boshqarishni avtomat-
                      lashtirish uchun qulay va optimal yondashuv
                    </p>
                    <button className="directions-middle-card__btn">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box">
                      <img
                        src={trade}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      CRM boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Mijozlar bilan munosabat- larni boshqarishni avtomat-
                      lashtirish uchun qulay va optimal yondashuv
                    </p>
                    <button className="directions-middle-card__btn">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box">
                      <img
                        src={trade}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      CRM boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Mijozlar bilan munosabat- larni boshqarishni avtomat-
                      lashtirish uchun qulay va optimal yondashuv
                    </p>
                    <button className="directions-middle-card__btn">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
                <li className="directions-middle__item">
                  <div className="directions-middle__card">
                    <div className="directions-middle-card__box">
                      <img
                        src={trade}
                        alt="trade"
                        className="directions-middle-card__img"
                      />
                    </div>
                    <h3 className="directions-middle-card__subject">
                      CRM boʼlimi
                    </h3>
                    <p className="directions-middle-card__text">
                      Mijozlar bilan munosabat- larni boshqarishni avtomat-
                      lashtirish uchun qulay va optimal yondashuv
                    </p>
                    <button className="directions-middle-card__btn">
                      Batafsil{" "}
                      <span className="directions-middle-card__btn-span">
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="directions-bottom">
            <button
              onClick={() => setShower(!shower)}
              className="directions-bottom__btn"
            >
              {shower ? "Yopish" : " Barcha bo`limlar"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Directions;
